import fs from "fs";
import path from "path";
import { variables } from "./variables";

export function generateCss() {
  let css = ":root {\n";
  variables.forEach((variable) => {
    css += `${variable.key}: ${variable.value};\n`;
  });
  css += "}\n";
  return css;
}

export function buildCss() {
  const distFolder = path.join(__dirname, "..", "..", "dist");
  fs.mkdirSync(distFolder);

  const cssPath = path.join(distFolder, "dashvar.css");
  const css = generateCss();
  fs.writeFileSync(cssPath, css);
}
