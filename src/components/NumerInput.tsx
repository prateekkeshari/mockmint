import { useState } from "react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  step: number;
  className?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min, step, className }) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleIncrement = () => {
    const newValue = internalValue + step;
    setInternalValue(newValue);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(min, internalValue - step);
    setInternalValue(newValue);
    onChange(newValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(min, parseInt(e.target.value) || min);
    setInternalValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <button onClick={handleDecrement} disabled={internalValue <= min}>-</button>
      <input
        type="number"
        value={internalValue}
        onChange={handleChange}
        className="text-center w-full custom-number-input"
        min={min}
        step={step}
      />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};