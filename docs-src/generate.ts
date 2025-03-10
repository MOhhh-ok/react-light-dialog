import fs from "fs-extra";
import path from "path";
const dir = 'src/demos';
const outputFile = 'src/generated.ts';

const demoFiles = fs.readdirSync(dir);
let result = 'export const demos={\n';
for (const file of demoFiles) {
  if (!file.endsWith('.tsx')) continue;
  const name = file.replace('.tsx', '');
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  result += `"${name}":\`${content.replace("'", "\\'")}\`,\n`;
}
result += '};';
fs.writeFileSync(path.join(process.cwd(), outputFile), result);