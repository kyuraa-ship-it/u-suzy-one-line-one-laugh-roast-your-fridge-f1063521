import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge hums all night like it pays rent, but the only thing it actually keeps cold is the light — the butter gave up years ago.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
