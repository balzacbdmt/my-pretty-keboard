import { MouseEventHandler } from "react";

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

function Button({ text, onClick, isDisabled }: Props) {
  return (
    <button
      className="bg-blue-500 enabled:hover:bg-blue-700 disabled:opacity-75 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default Button;
