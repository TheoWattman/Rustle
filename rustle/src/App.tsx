import { useState } from 'react'
import InputBar from './components/InputBar'
import GuessContainer from './components/GuessContainer';
import type { Item } from './types/Item';
import './App.css'

function App() {
  const [value, setValue] = useState<string>('');

  const [completions, setCompletions] = useState<string[]>([]);

  const handleInputChange = async (newValue: string) => {
    setValue(newValue);
    if(newValue.length >= 3) {
      const response = await fetch(`http://localhost:3000/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ input: newValue })
      })
    const data = await response.json();
    setCompletions(data.body);
    }
  };

  const handleSubmit = async (value: string) =>{
    const response = await fetch(`http://localhost:3000/validateGuess`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ value })
    })
    const data = await response.json();

    const parsed = (data.body);
    const { guess, categoryFeedback } = parsed;

    setGuesses(prev => [...prev, guess]);
    setFeedbacks(prev => [...prev, categoryFeedback]);
  };

  const [guesses, setGuesses] = useState<Item[]>([]);
  const [feedbacks, setFeedbacks] = useState<Record<string, 'wrong' | 'close' | 'correct'>[]>([]);

  return (
    <>
      <InputBar placeholder="Enter text here" completions={completions} onChange={handleInputChange} onSubmit={handleSubmit} />
      <p>Current value: {value}</p>
      <h1>Vite + React</h1>

      <GuessContainer guesses={guesses} feedbacks={feedbacks}/>

      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
