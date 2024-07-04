import { FC } from "react";
import "./Button.css";

export type ButtonProps = {
  className?: string;
  text: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
