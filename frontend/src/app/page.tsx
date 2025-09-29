"use client";
import { getDueWords } from "@/lib/srs";
import { Progress } from "@/lib/db";
import ReviewCard from "@/components/ReviewCard";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [dueList, setDueList] = useState<Progress[]>([]);

  useEffect(() => {
    const fetchDue = async () => {
      const list = await getDueWords();
      setDueList(list);
    };
    fetchDue();
  }, []);

  return (
    <div className="font-sans">
      <h1>Hệ thống Spaced Repetition PWA</h1>
      {dueList.length === 0 && <p>Không có từ nào đến hạn hôm nay</p>}
      {dueList.map((p) => (
        <ReviewCard key={p.id} progress={p} />
      ))}
    </div>
  );
}
