import Compact from "@uiw/react-color-compact";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers/store";
import { setColor } from "../../../reducers/colors";
import Switch from "../../../components/switch/Switch";
import { setKeyTestMode, setLuminosity } from "../../../reducers/settings";
import { useState } from "react";
import Button from "../../../components/button/button";

function Menu() {
  const dispatch = useDispatch();
  const colors = useSelector((state: RootState) => state.colors);
  const settings = useSelector((state: RootState) => state.settings);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-8 right-8 flex flex-col items-end gap-4">
      <Button
        rounded
        icon={isOpen ? "material-symbols:close" : "material-symbols:menu"}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="bg-zinc-900 p-4 max-h-[75vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col gap-4">
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
              value={settings.luminosity}
              onChange={(e) => dispatch(setLuminosity(Number(e.target.value)))}
            />
            <label className="font-semibold">Test mode</label>
            <Switch
              isOn={settings.keyTestMode}
              handleToggle={(v) => dispatch(setKeyTestMode(v))}
            />
          </div>
          <div>
            <label className="font-semibold" htmlFor="keys">
              Keys color
            </label>
            <Compact
              id="keys"
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
            <label className="font-semibold" htmlFor="letters">
              Letters color
            </label>
            <Compact
              id="letters"
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
            <label className="font-semibold" htmlFor="case_top">
              Case top color
            </label>
            <Compact
              id="case_top"
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
            <label className="font-semibold" htmlFor="case_bottom">
              Case bottom color
            </label>
            <Compact
              id="case_bottom"
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
      )}
    </div>
  );
}

export default Menu;
