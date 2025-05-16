import type { Item } from "../types/Item";
import GuessRow from "./GuessRow";

interface GuessContainerProps {
    guesses: Item[];
    feedbacks: Record<string, 'wrong' | 'close' | 'correct' | 'up' | 'down'>[];
}

const GuessContainer: React.FC<GuessContainerProps> = ({ guesses, feedbacks }) => {
    return (
      <div className="guess-container space-y-2">
        <div className="grid grid-cols-7 gap-2 font-bold">
          {["name", "releaseDate", "type", "craftable", "stackSize", "despawnTime", "loot"].map(category => (
            <div className="cell">
              {category}
            </div>
          ))}
        </div>
        {guesses.map((guess, index) => (
          <GuessRow
            key={index}
            guess={guess}
            feedback={feedbacks[index]}
            categories={["name", "releaseDate", "type", "craftable", "stackSize", "despawnTime", "loot"]}
          />
        ))}
      </div>
    );
  };


export default GuessContainer;