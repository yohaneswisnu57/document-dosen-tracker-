const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node generate_component.cjs <name> <type: fc|cc> [path]');
  process.exit(1);
}

const name = args[0];
const type = args[1];
const targetDirBase = args[2] || 'src/components';

const nameKebab = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const targetDir = path.join(process.cwd(), targetDirBase, name);

if (fs.existsSync(targetDir)) {
  console.error(`Error: Component directory already exists: ${targetDir}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const templateDir = path.join(__dirname, '..', 'assets', 'templates');

const files = [
  { template: `${type}.jsx.template`, output: `${name}.jsx` },
  { template: 'css.template', output: `${name}.css` },
  { template: 'index.js.template', output: 'index.js' }
];

files.forEach(file => {
  const templatePath = path.join(templateDir, file.template);
  let content = fs.readFileSync(templatePath, 'utf8');
  
  content = content.replace(/{{name}}/g, name);
  content = content.replace(/{{name-kebab}}/g, nameKebab);
  
  const outputPath = path.join(targetDir, file.output);
  fs.writeFileSync(outputPath, content);
  console.log(`Created: ${file.output}`);
});

console.log(`Successfully generated ${type === 'fc' ? 'functional' : 'class'} component: ${name}`);
