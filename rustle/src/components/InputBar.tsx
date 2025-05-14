import React, { useState, useEffect } from "react";

interface InputBarProps {
    placeholder?: string;
    completions: string[];
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
  }

const InputBar: React.FC<InputBarProps> = ({
    placeholder = "Type something...",
    completions,
    onChange,
    onSubmit
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      onChange(event.target.value);
      setShowDropdown(!!event.target.value);
      console.log(showDropdown);
    }

    const handleSelectCompletion = (completion: string) => {
      setInputValue("");
      setShowDropdown(false);
      onChange(completion);
      onSubmit(completion);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputValue.trim()) {
        onSubmit(inputValue.trim())
        setInputValue('');
        setShowDropdown(false);
      }
    }

    useEffect(() => {
      console.log("Completions:", completions);
    }, [completions]);

    return (
      <div className="relative w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            className="p-2 rounded-[5px] border-[1px] border-gray-900 w-full"
          />
        </form>

        {showDropdown && completions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-60 overflow-y-auto">
          {completions.map((completion, index) => (
            <li
              key={index}
              onClick={() => handleSelectCompletion(completion)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {completion}
              </li>
            ))}
          </ul>
        )}

      </div>
      );
}   

export default InputBar;