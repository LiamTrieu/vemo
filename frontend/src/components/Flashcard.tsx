"use client";
import { useState } from "react";

type Props = {
    word: string;
    meaning: string;
    example: string;
};

export default function Flashcard({ word, meaning, example }: Props) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            onClick={() => setFlipped(!flipped)}
            className="w-80 h-48 bg-white shadow-lg rounded-2xl flex items-center justify-center cursor-pointer p-4 text-center transition-transform duration-500 hover:scale-105"
        >
            {flipped ? (
                <div>
                    <p className="text-xl font-semibold">{meaning}</p>
                    <p className="text-sm italic mt-2">{example}</p>
                </div>
            ) : (
                <p className="text-2xl font-bold">{word}</p>
            )}
        </div>
    );
}
