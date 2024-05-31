import Compact from "@uiw/react-color-compact";
import { useEffect, useRef, useState } from "react";

interface Props {
  color: string;
  onChange: (hex: string) => void;
}

function ColorField({ color, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  // Listener on clicking outside to automatically close the palette
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        paletteRef.current &&
        !paletteRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        className={`w-8 h-8 rounded-full border-4 border-white`}
        style={{ backgroundColor: color }}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="fixed right-6 z-10 shadow-2xl" ref={paletteRef}>
          <Compact
            id="keys"
            color={color}
            style={{
              backgroundColor: "#323232",
            }}
            onChange={(color) => onChange(color.hex)}
          />
        </div>
      )}
    </div>
  );
}

export default ColorField;
