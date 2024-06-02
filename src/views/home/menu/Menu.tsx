import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers/store";
import { setColor } from "../../../reducers/colors";
import Switch from "../../../components/switch/Switch";
import { setKeyTestMode, setLuminosity } from "../../../reducers/settings";
import { useState } from "react";
import Button from "../../../components/button/button";
import ColorField from "../../../components/colorField/ColorField";
import ColorsBox from "../../../components/colorsBox/colorsBox";

function Menu() {
  const dispatch = useDispatch();
  const colors = useSelector((state: RootState) => state.colors);
  const settings = useSelector((state: RootState) => state.settings);

  const [isOpen, setIsOpen] = useState(false);

  const colorsRow = Object.keys(colors).map((colorName) => {
    const color = colorName as keyof typeof colors;
    return (
      <div className="flex gap-2 items-center" key={color}>
        <label className="font-semibold capitalize" htmlFor={color}>
          {color}
        </label>
        <ColorField
          color={colors[color]}
          onChange={(hex) => dispatch(setColor({ target: color, color: hex }))}
        />
      </div>
    );
  });

  return (
    <div className="fixed top-8 right-8 flex flex-col items-end gap-4">
      <Button
        rounded
        icon={isOpen ? "material-symbols:close" : "material-symbols:menu"}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="bg-zinc-900 p-4 max-h-[75vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col gap-4">
          <div className="flex gap-2 items-center">
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
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Highlight mode</label>
            <Switch
              isOn={settings.keyTestMode}
              handleToggle={(v) => dispatch(setKeyTestMode(v))}
            />
          </div>
          {colorsRow}
          <ColorsBox />
        </div>
      )}
    </div>
  );
}

export default Menu;
