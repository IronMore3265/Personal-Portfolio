const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("Starting static site build...");

try {
  // Determine command based on platform
  const isWindows = process.platform === "win32";
  const npmCmd = isWindows ? "npm.cmd" : "npm";
  
  // Run npm run build
  console.log("Executing build...");
  execSync(`${npmCmd} run build`, { stdio: "inherit" });
  
  const outDir = path.join(__dirname, "out");
  const localExportDir = path.join(__dirname, "export");
  const rootExportDir = path.join(__dirname, "..", "export");

  // Validate out directory exists
  if (!fs.existsSync(outDir)) {
    throw new Error(`Build output directory does not exist at: ${outDir}`);
  }

  // Copy to local export/
  console.log(`Copying static assets to local export folder: ${localExportDir}`);
  if (fs.existsSync(localExportDir)) {
    fs.rmSync(localExportDir, { recursive: true, force: true });
  }
  fs.cpSync(outDir, localExportDir, { recursive: true, force: true });

  // Copy to root export/
  console.log(`Copying static assets to workspace root export folder: ${rootExportDir}`);
  if (fs.existsSync(rootExportDir)) {
    fs.rmSync(rootExportDir, { recursive: true, force: true });
  }
  fs.cpSync(outDir, rootExportDir, { recursive: true, force: true });

  console.log("\nSuccess! Static build exported and synchronized.");
  console.log(`- Local folder: ${localExportDir}`);
  console.log(`- Root folder: ${rootExportDir}`);
} catch (error) {
  console.error("Static export failed:", error);
  process.exit(1);
}
