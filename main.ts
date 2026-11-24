import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry word: a boss who treats every minor inconvenience like a
// national emergency. One word, 12 characters, no spaces, no newline.
const WORD = "Urgencyphile";

// The harness sets MAKEFUN_OUTPUT_DIR for the run; fall back to the
// standard /output path when it is unset so the program also works
// when run by hand.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
// Write the word exactly as-is: no trailing newline, UTF-8 text.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
