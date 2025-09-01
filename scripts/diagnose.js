#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Diagnóstico del proyecto...\n');

// Verificar estructura de archivos críticos
const criticalFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'next.config.js',
  'package.json',
  'tailwind.config.ts'
];

console.log('📁 Verificando archivos críticos:');
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - NO ENCONTRADO`);
  }
});

// Verificar directorios importantes
const criticalDirs = [
  'app',
  'components',
  'lib',
  'public'
];

console.log('\n📂 Verificando directorios:');
criticalDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).length;
    console.log(`   ✅ ${dir}/ (${files} archivos)`);
  } else {
    console.log(`   ❌ ${dir}/ - NO ENCONTRADO`);
  }
});

// Verificar componentes con motion
console.log('\n🎬 Verificando componentes con Framer Motion:');
const motionComponents = [];
function scanForMotion(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanForMotion(fullPath);
    } else if (item.match(/\.(tsx|jsx)$/)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('m.') || content.includes('motion.')) {
        motionComponents.push(fullPath);
      }
    }
  });
}

if (fs.existsSync('components')) {
  scanForMotion('components');
  motionComponents.forEach(comp => {
    console.log(`   📄 ${comp}`);
  });
}

// Verificar configuración de Next.js
console.log('\n⚙️ Verificando configuración:');
try {
  const nextConfig = require('../next.config.js');
  console.log('   ✅ next.config.js cargado correctamente');
  
  if (nextConfig.output === 'export') {
    console.log('   ✅ Configurado para export estático');
  }
  
  if (nextConfig.compress) {
    console.log('   ✅ Compresión habilitada');
  }
} catch (error) {
  console.log(`   ❌ Error en next.config.js: ${error.message}`);
}

// Verificar package.json
try {
  const packageJson = require('../package.json');
  console.log(`   ✅ Next.js versión: ${packageJson.dependencies.next}`);
  console.log(`   ✅ Framer Motion versión: ${packageJson.dependencies['framer-motion']}`);
} catch (error) {
  console.log(`   ❌ Error en package.json: ${error.message}`);
}

// Verificar build
console.log('\n🏗️ Verificando build:');
if (fs.existsSync('out')) {
  const outFiles = fs.readdirSync('out').length;
  console.log(`   ✅ Directorio out/ existe (${outFiles} archivos)`);
  
  if (fs.existsSync('out/index.html')) {
    console.log('   ✅ index.html generado');
  }
} else {
  console.log('   ⚠️ Directorio out/ no encontrado - ejecuta npm run build');
}

// Verificar .next
if (fs.existsSync('.next')) {
  console.log('   ✅ Directorio .next/ existe');
} else {
  console.log('   ⚠️ Directorio .next/ no encontrado - ejecuta npm run dev');
}

console.log('\n🎯 Resumen:');
console.log(`   - Archivos críticos: ${criticalFiles.filter(f => fs.existsSync(f)).length}/${criticalFiles.length}`);
console.log(`   - Directorios: ${criticalDirs.filter(d => fs.existsSync(d)).length}/${criticalDirs.length}`);
console.log(`   - Componentes con motion: ${motionComponents.length}`);
console.log(`   - Build listo: ${fs.existsSync('out') ? 'Sí' : 'No'}`);
console.log(`   - Desarrollo listo: ${fs.existsSync('.next') ? 'Sí' : 'No'}`);

console.log('\n✅ Diagnóstico completado');
