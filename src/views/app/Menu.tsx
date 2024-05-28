import Compact from "@uiw/react-color-compact";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import { setColor } from "../../reducers/colors";

interface Props {
  luminosity: number;
  setLuminosity: (l: number) => void;
}

function Menu({ luminosity, setLuminosity }: Props) {
  const dispatch = useDispatch();
  const colors = useSelector((state: RootState) => state.colors);

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
          color={colors.keys}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) =>
            dispatch(setColor({ target: "keys", color: color.hex }))
          }
        />
      </div>
      <div>
        <label className="font-semibold" htmlFor="luminosity">
          Letters color
        </label>
        <Compact
          color={colors.letters}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) =>
            dispatch(setColor({ target: "letters", color: color.hex }))
          }
        />
      </div>
      <div>
        <label className="font-semibold" htmlFor="luminosity">
          Case top color
        </label>
        <Compact
          color={colors.caseTop}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) =>
            dispatch(setColor({ target: "caseTop", color: color.hex }))
          }
        />
      </div>
      <div>
        <label className="font-semibold" htmlFor="luminosity">
          Case top color
        </label>
        <Compact
          color={colors.caseBottom}
          style={{
            backgroundColor: "#323232",
          }}
          onChange={(color) =>
            dispatch(setColor({ target: "caseBottom", color: color.hex }))
          }
        />
      </div>
    </div>
  );
}

export default Menu;
