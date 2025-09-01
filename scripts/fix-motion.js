#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Corrigiendo componentes motion...');

function fixMotionInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Reemplazar import de motion por m
    if (content.includes("import { motion } from 'framer-motion'")) {
      content = content.replace(
        "import { motion } from 'framer-motion'",
        "import { m } from 'framer-motion'"
      );
      modified = true;
    }

    // Si usa m. pero no tiene el import, agregarlo
    if (content.includes('m.') && !content.includes("import { m } from 'framer-motion'") && !content.includes("import { motion } from 'framer-motion'")) {
      // Buscar la línea de import de React
      const reactImportMatch = content.match(/import React.*from 'react';?/);
      if (reactImportMatch) {
        const importLine = reactImportMatch[0];
        content = content.replace(importLine, `${importLine}\nimport { m } from 'framer-motion';`);
      } else {
        // Si no hay import de React, agregar al inicio
        content = `import { m } from 'framer-motion';\n${content}`;
      }
      modified = true;
    }

    // Reemplazar motion. por m.
    if (content.includes('motion.')) {
      content = content.replace(/motion\./g, 'm.');
      modified = true;
    }

    // Reemplazar <motion por <m
    if (content.includes('<motion')) {
      content = content.replace(/<motion/g, '<m');
      modified = true;
    }

    // Reemplazar </motion por </m
    if (content.includes('</motion')) {
      content = content.replace(/<\/motion/g, '</m');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Corregido: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error en ${filePath}:`, error.message);
  }
}

function scanDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (item.match(/\.(tsx|jsx)$/)) {
      fixMotionInFile(fullPath);
    }
  });
}

// Corregir componentes
const componentsDir = path.join(process.cwd(), 'components');
if (fs.existsSync(componentsDir)) {
  scanDirectory(componentsDir);
  console.log('✅ Corrección completada');
} else {
  console.log('❌ Directorio components no encontrado');
}
