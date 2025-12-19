import fs from "node:fs";
import sharp from "sharp";

const svg = fs.readFileSync("public/og.svg");

await sharp(svg, { density: 192 })
  .resize(1200, 630)
  .png({ quality: 100 })
  .toFile("public/og.png");

console.log("Generated public/og.png");