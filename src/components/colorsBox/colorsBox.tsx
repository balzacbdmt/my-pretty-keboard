import { useSelector } from "react-redux";
import { join } from "../../constants/helpers";
import { RootState } from "../../reducers/store";

function ColorsBox() {
  const colors = useSelector((state: RootState) => state.colors);

  const colorClass = (index: number, length: number) =>
    join([
      "flex-1",
      index === 0 ? "rounded-l-lg" : "",
      index === length - 1 ? "rounded-r-lg" : "",
    ]);

  // TODO: add a tooltip on hovering a color
  // TODO: add to press-paper on click a color

  return (
    <div className="flex w-full h-10">
      {Object.values(colors).map((color, index) => (
        <div
          key={index}
          className={colorClass(index, Object.values(colors).length)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default ColorsBox;
