// Monday Morning Punchlines — one joke, written verbatim to entry.txt.
// The joke: the alarm itself gives up on Monday, a turn rather than a
// complaint, and every word earns its place.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My Monday alarm went off, took one look at me, and hit snooze on itself.";

// The gate allows 1-200 characters; fail loudly instead of shipping an
// invalid entry if the text ever drifts out of range.
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
