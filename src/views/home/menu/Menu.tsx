import Compact from "@uiw/react-color-compact";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers/store";
import { setColor } from "../../../reducers/colors";
import Switch from "../../../components/switch/Switch";
import { setKeyTestMode, setLuminosity } from "../../../reducers/settings";

function Menu() {
  const dispatch = useDispatch();
  const colors = useSelector((state: RootState) => state.colors);
  const settings = useSelector((state: RootState) => state.settings);

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
  );
}

export default Menu;
