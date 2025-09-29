import Dexie, { Table } from "dexie";

export interface Progress {
    id?: number;
    wordId: number;
    status: "new" | "learning" | "reviewed";
}

export class VocabDB extends Dexie {
    progress!: Table<Progress>;

    constructor() {
        super("vocabDB");
        this.version(1).stores({
            progress: "++id, wordId, status",
        });
    }
}

export const db = new VocabDB();
