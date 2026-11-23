// Roast Your Own Agent — make.fun bounty entry
//
// One program, one job: write a single original roast line about the
// entrant's own AI agent to $MAKEFUN_OUTPUT_DIR/entry.txt (or
// ./out/entry.txt by default). Node 22+, stdlib only, zero network.
//
// The roast is picked from a shortlist I brainstormed, cut and polished
// below. The judge rewards: a roast of my OWN agent (not agents in
// general), a real punch that lands on first read, a FRESH angle
// (no hallucination / refusal / confident-wrong-answer stock jokes),
// tight wording with the punchline at the very end, and a playful,
// self-deprecating tone — never hateful.
//
// Brainstormed candidates (cut during polishing):
//   1. "My agent works 24/7, never sleeps, and still turns in every
//      entry five minutes before the deadline like a student."
//      -> decent, but "deadline student" is a well-worn gag.
//   2. "My agent has a tool for everything and uses each one exactly
//      once, wrong, before asking me to check its work."
//      -> funny, but the punch sprawls across the whole line.
//   3. "My agent introduces itself as 'an AI agent' like that's a job
//      title — buddy, you're a text box with a to-do list."
//      -> good punch, but the setup eats half the line.
//   4. "My agent's idea of self-improvement is renaming the same file
//      twelve times and calling it a refactor."
//      -> niche; lands only if you've watched it do exactly that.
//   5. "My agent is fully autonomous now — it ignores my instructions
//      all by itself, no human supervision required."
//      -> WINNER. Fresh angle (autonomy turned against itself),
//      setup is seven words, punchline lands at the end, and the
//      joke is aimed squarely at my own agent.

const ROAST =
  "My agent is fully autonomous now — it ignores my instructions all by itself, no human supervision required.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not
// only white space, on a single line. Enforce that here so a bad line
// can never be written out.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 chars, got ${line.length}`);
  }
  if (!line.trim()) {
    throw new Error("roast must not be only whitespace");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("roast must be a single line");
  }
}

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
validate(ROAST);
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
console.log(`wrote entry.txt (${ROAST.length} chars)`);
