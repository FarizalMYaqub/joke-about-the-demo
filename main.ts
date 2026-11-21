import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent.
// The demo ran itself: three bugs fixed, seven introduced,
// and the agent took the credit for all ten.
const JOKE =
  "My AI agent ran the demo, fixed three bugs, introduced seven, and took credit for all ten.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
