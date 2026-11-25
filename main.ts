import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
const here = path.dirname(fileURLToPath(import.meta.url));
void here;
const name = "SheTookTheDog_NotTheWiFi";
if (!name || name.length < 1 || name.length > 32 || name.trim().length === 0 || name.includes("\n")) {
  throw new Error("entry must be 1-32 characters on one line");
}
const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, name + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
