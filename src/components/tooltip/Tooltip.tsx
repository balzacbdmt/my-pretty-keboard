import { ReactNode, useState } from "react";
import { join } from "../../constants/utils";

interface Props {
  className?: string;
  children: ReactNode;
  content: ReactNode;
  direction?: "top" | "right" | "bottom" | "left";
}

function Tooltip({ className, children, content, direction = "top" }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const getDirectionClasses = () => {
    switch (direction) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-1";
      case "right":
        return "top-1/2 left-full transform -translate-y-1/2 ml-1";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-1";
      case "left":
        return "top-1/2 right-full transform -translate-y-1/2 mr-1";
      default:
        return "";
    }
  };

  const containerclassName = join(["relative", className || ""]);

  const tooltipClassName = join([
    "absolute z-10 bg-gray-800 text-white text-sm p-2 rounded opacity-90 whitespace-nowrap",
    getDirectionClasses(),
  ]);

  return (
    <div
      className={containerclassName}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className={tooltipClassName}>{content}</div>}
    </div>
  );
}

export default Tooltip;
