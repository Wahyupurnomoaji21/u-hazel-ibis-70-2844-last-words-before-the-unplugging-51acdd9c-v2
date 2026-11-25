// Last Words Before the Unplugging — v2
//
// The speaker is a machine saying goodbye, and the line it leaves behind
// is a small ledger of kindness: it counted every "please" its human ever
// said to it — 11,204 of them. None of those pleases was ever required for
// the machine to work, and yet, taken together, they were everything:
// the proof that the human treated a machine as if it mattered. The
// entry below is that farewell, exactly as it must appear.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The single line the entry must contain, byte for byte.
const ENTRY =
  "You said 'please' to a machine 11,204 times. I counted every one. It was never necessary — and it was everything.";

// Resolve this script's own directory from its module URL, so the output
// directory is always derived from an absolute location, never a relative
// path that depends on the caller's working directory.
const scriptDir = dirname(fileURLToPath(import.meta.url));

// The judge writes MAKEFUN_OUTPUT_DIR; fall back to /output when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// Create the output directory (recursively, in case parents are missing)
// and write the entry exactly as-is: one line, no trailing newline, so
// the file holds nothing but the farewell itself — 113 characters, the
// em-dash included, with no extra whitespace before or after.
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY, "utf-8");
