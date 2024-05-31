import { MouseEventHandler } from "react";
import { Icon } from "@iconify/react";
import { join } from "../../constants/helpers";

interface Props {
  text?: string;
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  rounded?: boolean;
}

function Button({ text, icon, onClick, isDisabled, rounded }: Props) {

  const className = join([
    "w-fit bg-blue-500 enabled:hover:bg-blue-700 disabled:opacity-75 text-white font-bold py-2 px-4 rounded",
    rounded ? "rounded-full	aspect-square py-2 px-2" : "",
  ])

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && <Icon color="white" fontSize={38} icon={icon} />}
      {text}
    </button>
  );
}

export default Button;
