import Compact from "@uiw/react-color-compact";
import { useState } from "react";

interface Props {
  luminosity: number;
  setLuminosity: (l: number) => void;
}

function Menu({ luminosity, setLuminosity }: Props) {
  const [keysColor, setKeysColor] = useState("#fff");
  const [lettersColor, setLettersColor] = useState("#fff");
  const [caseTopColor, setCaseTopColor] = useState("#fff");
  const [caseBottomColor, setCaseBottomColor] = useState("#fff");

  return (
    <div className="fixed bottom-0 w-5/6 left-1/2 -translate-x-1/2 h-[180px] bg-zinc-900 p-2 rounded-t-2xl shadow-2xl flex gap-4 justify-center items-center">
      <div className="flex flex-col w-[150px] gap-2">
        <label className="font-semibold" htmlFor="luminosity">
          Luminosity
        </label>
        <input
          type="range"
          id="volume"
          name="luminosity"
          min="0"
          max="6"
          value={luminosity}
          onChange={(e) => setLuminosity(Number(e.target.value))}
        />
      </div>
      <div>
        <label className="font-semibold" htmlFor="luminosity">
          Keys color
        </label>
        <Compact
          color={keysColor}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) => {
            setKeysColor(color.hex);
          }}
        />
      </div>
      <div>
        <label className="font-semibold" htmlFor="luminosity">
          Letters color
        </label>
        <Compact
          color={lettersColor}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) => {
            setLettersColor(color.hex);
          }}
        />
      </div>
      <div>
        <label className="font-semibold" htmlFor="luminosity">
          Case top color
        </label>
        <Compact
          color={caseTopColor}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) => {
            setCaseTopColor(color.hex);
          }}
        />
      </div>
      <div>
        <label className="font-semibold" htmlFor="luminosity">
          Case top color
        </label>
        <Compact
          color={caseBottomColor}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) => {
            setCaseBottomColor(color.hex);
          }}
        />
      </div>
    </div>
  );
}

export default Menu;
