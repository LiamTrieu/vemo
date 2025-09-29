"use client";

import React, { useEffect, useState } from "react";
import { getDueWords } from "@/lib/srs";
import { db, Progress } from "@/lib/db";

export default function ReviewList() {
  const [dueList, setDueList] = useState<(Progress & { text: string })[]>([]);

  useEffect(() => {
    const fetchDue = async () => {
      const progresses = await getDueWords();
      const enriched = await Promise.all(
        progresses.map(async (p) => {
          const word = await db.words.get(p.wordId);
          return { ...p, text: word?.text || "" };
        })
      );
      setDueList(enriched);
    };

    fetchDue();
  }, []);

  return (
    <div>
      <h2>Danh sách từ cần ôn tập</h2>
      {dueList.length === 0 && <p>Không có từ nào đến hạn hôm nay</p>}
      <ul>
        {dueList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
