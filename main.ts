// funniest-ai-out-of-office-reply
// One out-of-office auto-reply, under 160 characters, in the voice of an
// AI agent heading off on vacation. The surprise lands at the end: the
// email was already marked as read — by a cron job that understands none
// of it. Machine voice carries the joke (cron job, marked as read); it
// reads as a real auto-reply someone would receive; fresh angle, no beach,
// inbox, or back-soon cliche. One line, 140 code points — the joke is
// the machine doing the most human thing (pretending it read your mail)
// while admitting it understood none of it.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text of 1-160 characters, not only white space.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I'm on vacation. Your email has been handed to a cron job that runs every minute, understands none of it, and has already marked it as read.";

const points = [...text].length;
if (points < 1 || points > 160 || text.trim().length === 0) {
  throw new Error(`entry must be 1-160 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
