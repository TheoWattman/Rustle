import type { Item } from "../types/Item";
import GuessRow from "./GuessRow";

interface GuessContainerProps {
    guesses: Item[];
    feedbacks: Record<string, 'wrong' | 'close' | 'right'>[];
}

const GuessContainer: React.FC<GuessContainerProps> = ({ guesses, feedbacks }) => {
    return (
      <div className="guess-container space-y-2">
        {guesses.map((guess, index) => (
          <GuessRow
            key={index}
            guess={guess}
            feedback={feedbacks[index]}
            categories={["name", "releaseDate", "type", "isCraftable", "availability"]}
          />
        ))}
      </div>
    );
  };


export default GuessContainer;