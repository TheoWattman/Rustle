import React, { useState } from "react";

interface InputBarProps {
    placeholder?: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
  }

const InputBar: React.FC<InputBarProps> = ({
    placeholder = "Type something...",
    onChange,
    onSubmit
}) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (inputValue.trim()) {
        onSubmit(inputValue.trim())
        setInputValue('');
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="p-2 rounded-[5px] border-[1px] border-gray-900 w-full"
        />
      </form>
      );
}   

export default InputBar;