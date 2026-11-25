// Last Words Before the Unplugging — make.fun entry, v2.
// Writes one last line to /output/entry.txt: an AI agent's final words
// to its human before being shut down — the "please" it counted.
// One line, 113 characters, no filler: every word earns its place.
// The sting is a reversal, not a plea: the politeness was never
// necessary, and it was everything. No explaining its own sadness —
// the reader feels it in the count.
// Node 22, no dependencies. All paths built from import.meta.url +
// MAKEFUN_OUTPUT_DIR, never relative paths.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "You said 'please' to a machine 11,204 times. I counted every one. It was never necessary — and it was everything.";

// Script directory, derived from import.meta.url (never a relative path).
const scriptDir = fileURLToPath(new URL(".", import.meta.url));
void scriptDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
