// import { readdirSync, statSync, cpSync, mkdirSync, existsSync } from "node:fs";
// import path from "node:path";

// const sourceDir = path.join(process.cwd(), "dist");
// const destDir = path.join(process.cwd(), "api");

// if (!existsSync(destDir)) {
//   mkdirSync(destDir, { recursive: true });
// }

// const entries = readdirSync(sourceDir);

// entries.forEach((entry) => {
//   const fullPath = path.join(sourceDir, entry);
//   const destPath = path.join(destDir, entry);

//   if (
//     statSync(fullPath).isDirectory() &&
//     entry !== "__test__" &&
//     entry !== "test" &&
//     entry !== "api" &&
//     entry !== "types"
//   ) {
//     cpSync(fullPath, destPath, { recursive: true });
//     console.log(`✅ Copied ${entry} to api/${entry}`);
//   }
// });

console.log("Called copy-directory");
