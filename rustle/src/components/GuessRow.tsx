import type { Item } from "../types/Item";
import React from "react";

interface GuessRowProps {
    guess: Item;
    solution: Item;
    categories: string[];
}

function numCommonElements(a : string[], b : string[] ): number {
    let count = 0;

    const setA = new Set(a);
    const setB = new Set(b);

    for(let value of setA) {
        if(setB.has(value)) {
            count++;
        }
    }

    return count;
} 

const GuessRow: React.FC<GuessRowProps> = ({guess, solution, categories}) => {
    return (
        <div className="guess-row flex gap-2">
            {
                categories.map((category) => {
                    const guessValue = guess[category];
                    const solutionValue = solution[category];
                    
                    const commonElements = numCommonElements(guessValue, solutionValue);

                    let status: 'correct' | 'wrong' | 'close' = 'close';
                    if(commonElements === guessValue.length) {
                        status = 'correct';
                    } else if(commonElements === 0) {
                        status = 'wrong'
                    }

                    return (
                        <div key={category} className={`cell ${status}`}>
                            {guessValue}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default GuessRow;