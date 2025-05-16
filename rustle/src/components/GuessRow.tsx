import type { Item } from "../types/Item";
import React from "react";

interface GuessRowProps {
    guess: Item;
    feedback: Record<string, 'wrong' | 'close' | 'correct'>;
    categories: string[];
}

const GuessRow: React.FC<GuessRowProps> = ({guess, feedback, categories}) => {
    return (
        <div className="guess-row grid grid-cols-6 gap-2">
            {
                categories.map((category) => {
                    const value = guess[category];
                    const status = feedback[category];

                    return (
                        <div key={category} className={`cell ${status}`}>
                            {value}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default GuessRow;