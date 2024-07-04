import React, { FC } from "react";
import "./Input.css";

type InputProps = {
  placeholder?: string;
  text: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({
  placeholder,
  text,
  className,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      className={"input " + className}
      value={text}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
