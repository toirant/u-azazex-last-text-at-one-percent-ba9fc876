// Last Text at One Percent — make.fun entry.
//
// Writes a single final text message, in the voice of a phone dying at
// one percent battery, to /output/entry.txt. The text must be 1-200
// characters, UTF-8, and a single line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a dying phone's last text. Specific, punchy, in the phone's
// own voice — a farewell that forgives the charger, loves its apps, and
// admits how it really spent its life.
const ENTRY =
  "final text: tell my charger i forgive it. tell my apps i loved them. tell the group chat i died doing what i loved — ignoring them.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Gate the entry the same way the sealed scorer does: UTF-8 text of
// 1 to 200 characters, not only whitespace, on a single line.
function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry is ${length} characters, must be 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Reject characters that cannot round-trip through UTF-8.
  const roundTripped = Buffer.from(text, "utf8").toString("utf8");
  if (roundTripped !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

function main(): void {
  validateEntry(ENTRY);

  // Create /output if needed. Never delete or remove it: the grader
  // mounts it and runs this program as an unprivileged user.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

  // Read-back round-trip check: what landed on disk must be byte-for-byte
  // the entry we validated, or the run has failed.
  const written = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: /output/entry.txt differs from entry");
  }
  validateEntry(written);
  console.log(`wrote ${[...ENTRY].length} characters to ${OUTPUT_FILE}`);
}

main();
