#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando recursos 404...');

function findBrokenLinks(dir) {
  const brokenLinks = [];
  
  function scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Buscar URLs y rutas que podrían estar rotas
      const urlPatterns = [
        /href=["']([^"']+)["']/g,
        /src=["']([^"']+)["']/g,
        /url\(["']?([^"']+)["']?\)/g,
        /import\s+["']([^"']+)["']/g,
        /from\s+["']([^"']+)["']/g
      ];
      
      urlPatterns.forEach(pattern => {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          const url = match[1];
          
          // Verificar si es una ruta local que podría estar rota
          if (url.startsWith('/') && !url.startsWith('//')) {
            const fullPath = path.join(dir, url);
            if (!fs.existsSync(fullPath) && !url.includes('#')) {
              brokenLinks.push({
                file: filePath,
                url: url,
                line: content.substring(0, match.index).split('\n').length
              });
            }
          }
        }
      });
    } catch (error) {
      console.error(`Error leyendo archivo ${filePath}:`, error.message);
    }
  }
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.match(/\.(js|jsx|ts|tsx|html|css)$/)) {
        scanFile(fullPath);
      }
    });
  }
  
  scanDirectory(dir);
  return brokenLinks;
}

// Verificar el directorio out
const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  const brokenLinks = findBrokenLinks(outDir);
  
  if (brokenLinks.length > 0) {
    console.log('❌ Encontrados recursos potencialmente rotos:');
    brokenLinks.forEach(link => {
      console.log(`   - ${link.file}:${link.line} -> ${link.url}`);
    });
  } else {
    console.log('✅ No se encontraron recursos rotos');
  }
} else {
  console.log('⚠️  Directorio out no encontrado. Ejecuta npm run build primero.');
}

// Verificar también el directorio de componentes
const componentsDir = path.join(process.cwd(), 'components');
if (fs.existsSync(componentsDir)) {
  console.log('\n🔍 Verificando componentes...');
  const componentBrokenLinks = findBrokenLinks(componentsDir);
  
  if (componentBrokenLinks.length > 0) {
    console.log('❌ Encontrados enlaces rotos en componentes:');
    componentBrokenLinks.forEach(link => {
      console.log(`   - ${link.file}:${link.line} -> ${link.url}`);
    });
  } else {
    console.log('✅ No se encontraron enlaces rotos en componentes');
  }
}
