import { useState } from 'react'
import InputBar from './components/InputBar'
import GuessContainer from './components/GuessContainer';
import type { Item } from './types/Item';
import './App.css'

function App() {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = (value: string) => {
    console.log(value);
  };

  const items: Item[] = [
    {
      name: ["Assault Rifle"],
      releaseDate: ["2016"],
      type: ["weapon"],
      isCraftable: ["true"],
      availability: ["scientist", "elite crate"]
    },
    {
      name: ["Semi Auto Rifle"],
      releaseDate: ["2018"],
      type: ["weapon"],
      isCraftable: ["true"],
      availability: ["scientist", "military crate"]
    }
  ]

  return (
    <>
      <InputBar placeholder="Enter text here" onChange={handleInputChange} onSubmit={handleSubmit} />
      <p>Current value: {value}</p>
      <h1>Vite + React</h1>

      <GuessContainer guesses={[items[0], items[1]]} solution={items[1]} categories={["name", "releaseDate", "type", "isCraftable", "availability"]}/>

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
