import { db, Progress } from "./db";

/**
 * Cập nhật tiến trình học 1 từ theo SM2
 * @param wordId id của từ
 * @param quality 2=Again, 3=Hard,4=Good,5=Easy
 */
export async function updateProgress(wordId: number, quality: number) {
  if (quality < 2 || quality > 5) throw new Error("quality must be 2~5");

  const now = Date.now();
  let progress = await db.progress.where("wordId").equals(wordId).first();

  if (!progress) {
    progress = {
      wordId,
      status: "learning",
      due: now,
      interval: 0,
      easeFactor: 2.5,
      repetitions: 0,
      lapses: 0,
      lastReviewed: now,
    };
  }

  if (quality === 2) {
    progress.repetitions = 0;
    progress.lapses += 1;
    progress.interval = 1 * 24 * 60 * 60 * 1000;
    progress.status = "learning";
  } else {
    progress.repetitions += 1;
    const ef = progress.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    progress.easeFactor = Math.max(1.3, ef);

    if (progress.repetitions === 1) progress.interval = 1 * 24 * 60 * 60 * 1000;
    else if (progress.repetitions === 2) progress.interval = 6 * 24 * 60 * 60 * 1000;
    else progress.interval = progress.interval * progress.easeFactor;

    progress.status = "reviewed";
  }

  progress.lastReviewed = now;
  progress.due = now + progress.interval;

  if (progress.id) await db.progress.put(progress);
  else await db.progress.add(progress);

  return progress;
}

/**
 * Lấy danh sách từ đến hạn hôm nay
 */
export async function getDueWords() {
  const now = Date.now();
  return db.progress
    .where("due")
    .belowOrEqual(now)
    .toArray();
}
