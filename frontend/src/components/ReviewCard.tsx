"use client";

import React, { useState } from "react";
import { updateProgress } from "@/lib/srs";
import { db, Progress } from "@/lib/db";

interface ReviewCardProps {
  progress: Progress;
}

export default function ReviewCard({ progress }: ReviewCardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const [word, setWord] = useState<string>("");

  React.useEffect(() => {
    db.words.get(progress.wordId).then((w) => setWord(w?.text || ""));
  }, [progress.wordId]);

  const handleAnswer = async (quality: number) => {
    await updateProgress(progress.wordId, quality);
    setShowAnswer(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p><strong>Câu hỏi:</strong> {word}</p>
      {showAnswer && <p><strong>Trả lời:</strong> ...</p>}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Ẩn" : "Hiện"} trả lời
      </button>
      <div>
        <button onClick={() => handleAnswer(2)}>Again</button>
        <button onClick={() => handleAnswer(3)}>Hard</button>
        <button onClick={() => handleAnswer(4)}>Good</button>
        <button onClick={() => handleAnswer(5)}>Easy</button>
      </div>
    </div>
  );
}
