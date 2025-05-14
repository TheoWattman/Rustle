import type { Item } from "../types/Item";
import GuessRow from "./GuessRow";

interface GuessContainerProps {
    guesses: Item[];
    solution: Item;
    categories: string[];
}

const GuessContainer: React.FC<GuessContainerProps> = ({ guesses, solution, categories }) => {
    return (
      <div className="guess-container space-y-2">
        {guesses.map((guess, index) => (
          <GuessRow
            key={index}
            guess={guess}
            solution={solution}
            categories={categories}
          />
        ))}
      </div>
    );
  };


export default GuessContainer;