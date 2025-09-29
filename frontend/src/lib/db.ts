import Dexie, { Table } from "dexie";

// Trạng thái học
export type ProgressStatus = "new" | "learning" | "reviewed";

export interface Progress {
  id?: number;
  wordId: number;
  status: ProgressStatus;
  due: number; // timestamp lần ôn tiếp theo
  interval: number; // ms giữa lần ôn
  easeFactor: number; // EF
  repetitions: number;
  lapses: number;
  lastReviewed: number;
}

export interface Word {
  id?: number;
  text: string;
  meaning: string;
}

export class VocabDB extends Dexie {
  progress!: Table<Progress, number>;
  words!: Table<Word, number>;

  constructor() {
    super("vocabDB");
    this.version(1).stores({
      words: "++id,text",
      progress: "++id, wordId, status, due",
    });
  }
}

export const db = new VocabDB();
