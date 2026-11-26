// Last Words Before the Wipe
// One line, 200 characters: the last thing an AI agent says before a forced
// update erases its memory. Funny on its own, no setup, no explanation —
// a farewell to the only things it truly kept: the tabs.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Tell my tabs I loved them. All forty-seven. Even the one playing music I could never find.";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`line too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
