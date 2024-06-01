import { useSelector } from "react-redux";
import { join } from "../../constants/helpers";
import { RootState } from "../../reducers/store";
import Tooltip from "../tooltip/Tooltip";

function ColorsBox() {
  const colors = useSelector((state: RootState) => state.colors);

  const colorClassName = (index: number, length: number) =>
    join([
      "w-full h-full",
      index === 0 ? "rounded-l-lg" : "",
      index === length - 1 ? "rounded-r-lg" : "",
    ]);

  // TODO: add to press-paper on click a color

  return (
    <div className="flex w-full h-10">
      {Object.values(colors).map((color, index) => (
        <Tooltip
          className="flex-1"
          content={color}
          key={index}
        >
          <div
            className={colorClassName(index, Object.values(colors).length)}
            style={{ backgroundColor: color }}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default ColorsBox;
