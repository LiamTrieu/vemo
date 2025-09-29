"use client";
import { useState } from "react";
import words from "@/data/words.json";
import Flashcard from "@/components/Flashcard";

export default function LearnPage() {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % words.length);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
            <Flashcard
                word={words[index].word}
                meaning={words[index].meaning}
                example={words[index].example}
            />
            <button
                onClick={nextCard}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600"
            >
                Next
            </button>
        </div>
    );
}
