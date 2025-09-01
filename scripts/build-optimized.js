#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build optimizado...');

// Limpiar directorio out
if (fs.existsSync('out')) {
  console.log('🧹 Limpiando directorio out...');
  fs.rmSync('out', { recursive: true, force: true });
}

// Variables de entorno para optimización
process.env.NODE_ENV = 'production';
process.env.NEXT_TELEMETRY_DISABLED = '1';

try {
  // Build con optimizaciones
  console.log('📦 Ejecutando build...');
  execSync('npm run build', { 
    stdio: 'inherit',
    env: { ...process.env }
  });

  // Optimizar archivos CSS
  console.log('🎨 Optimizando CSS...');
  const cssFiles = findFiles('out', '.css');
  cssFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Remover comentarios y espacios innecesarios
    const optimized = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Comentarios CSS
      .replace(/\s+/g, ' ') // Múltiples espacios
      .replace(/;\s*}/g, '}') // Punto y coma antes de }
      .trim();
    fs.writeFileSync(file, optimized);
  });

  // Optimizar archivos JS
  console.log('⚡ Optimizando JavaScript...');
  const jsFiles = findFiles('out', '.js');
  jsFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Remover console.logs en producción
    const optimized = content.replace(/console\.(log|warn|error|info)\([^)]*\);?/g, '');
    fs.writeFileSync(file, optimized);
  });

  console.log('✅ Build optimizado completado!');
  console.log('📊 Estadísticas del build:');
  
  // Mostrar estadísticas
  const stats = getBuildStats();
  console.log(`   - Archivos CSS: ${stats.cssFiles}`);
  console.log(`   - Archivos JS: ${stats.jsFiles}`);
  console.log(`   - Tamaño total: ${stats.totalSize} MB`);

} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}

function findFiles(dir, extension) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, extension));
    } else if (item.endsWith(extension)) {
      files.push(fullPath);
    }
  });
  
  return files;
}

function getBuildStats() {
  const cssFiles = findFiles('out', '.css').length;
  const jsFiles = findFiles('out', '.js').length;
  
  let totalSize = 0;
  const allFiles = [...findFiles('out', '.css'), ...findFiles('out', '.js')];
  
  allFiles.forEach(file => {
    const stats = fs.statSync(file);
    totalSize += stats.size;
  });
  
  return {
    cssFiles,
    jsFiles,
    totalSize: (totalSize / (1024 * 1024)).toFixed(2)
  };
}
