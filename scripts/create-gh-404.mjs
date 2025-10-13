import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");

if (!existsSync(indexPath)) {
  console.error("vite build must run before creating 404.html");
  process.exit(1);
}

cpSync(indexPath, notFoundPath);
console.log("Created dist/404.html for GitHub Pages fallback");
