// Script to extend awsicons.js with additional icons from Resource-Icons and Category-Icons
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const RESOURCE_ICONS_DIR = path.join(PUBLIC_DIR, 'awsicons', 'Resource-Icons');
const CATEGORY_ICONS_DIR = path.join(PUBLIC_DIR, 'awsicons', 'Category-Icons');
const OUTPUT_FILE = path.resolve('src', 'app', 'lib', 'awsicons.js');

// Function to recursively find all SVG files in a directory
function findSvgFiles(dir, basePath = '') {
  const results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const relativePath = path.join(basePath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      results.push(...findSvgFiles(filePath, path.join(basePath, file)));
    } else if (file.endsWith('.svg')) {
      // Add SVG files
      results.push({
        path: filePath,
        relativePath: relativePath.replace(/\\/g, '/'),
      });
    }
  }

  return results;
}

// Process files and create a mapping
function processIconFiles(dir, prefix, baseDir) {
  const svgFiles = findSvgFiles(dir);
  const iconMap = {};

  svgFiles.forEach(file => {
    // Remove the file extension and public prefix to create web paths
    const webPath = `/awsicons/${file.relativePath}`;
    
    // Generate a unique key name from the filename
    const filename = path.basename(file.path, '.svg');
    const folders = path.dirname(file.relativePath).split(path.sep);
    
    // Get the last folder name to use as a prefix for the key
    const lastFolder = folders[folders.length - 1];
    
    // Clean up the key: replace spaces, dots, and special chars with dashes, and ensure camelCase
    let key = `${prefix}-${lastFolder}-${filename}`
      .replace(/[\s._]+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '');
      
    iconMap[key] = webPath;
  });

  return iconMap;
}

// Main function to generate the icons
async function generateExtendedIconsJs() {
  // Read the current awsicons.js file
  let content = fs.readFileSync(OUTPUT_FILE, 'utf8');
  
  // Process resource icons
  const resourceIcons = processIconFiles(RESOURCE_ICONS_DIR, 'Res', PUBLIC_DIR);
  
  // Process category icons
  const categoryIcons = processIconFiles(CATEGORY_ICONS_DIR, 'Cat', PUBLIC_DIR);
  
  // Create the new exports
  const resourceIconsContent = `export const resourceIcons = ${JSON.stringify(resourceIcons, null, 2)};\n`;
  const categoryIconsContent = `export const categoryIcons = ${JSON.stringify(categoryIcons, null, 2)};\n`;
  
  // Add the new exports at the end of the file before the default export
  const defaultExportIndex = content.lastIndexOf('export default');
  if (defaultExportIndex !== -1) {
    content = content.substring(0, defaultExportIndex) + 
              resourceIconsContent + 
              categoryIconsContent + 
              content.substring(defaultExportIndex);
    
    // Update the default export to include new icon sets
    content = content.replace(
      'export default awsIcons;',
      'export default { ...awsIcons, ...resourceIcons, ...categoryIcons };'
    );
    
    fs.writeFileSync(OUTPUT_FILE, content);
    console.log('Successfully extended awsicons.js with Resource and Category icons');
  } else {
    console.error('Could not find default export in awsicons.js');
  }
}

// Run the script
generateExtendedIconsJs().catch(console.error);