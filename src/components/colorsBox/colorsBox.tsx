import { useDispatch, useSelector } from "react-redux";
import { generateRandomId, join } from "../../constants/utils";
import { RootState } from "../../reducers/store";
import Tooltip from "../tooltip/Tooltip";
import { addNotification } from "../../reducers/notifications";
import { copyToClipboard } from "../../constants/utils";

function ColorsBox() {
  const dispatch = useDispatch();
  const colors = useSelector((state: RootState) => state.colors);

  const colorClassName = (index: number, length: number) =>
    join([
      "w-full h-full",
      index === 0 ? "rounded-l-lg" : "",
      index === length - 1 ? "rounded-r-lg" : "",
    ]);

  const onClickColor = async (color: string) => {
    const success = await copyToClipboard(color);
    const notification = {
      id: generateRandomId(),
      title: success ? "Success !" : "Error !",
      message: success
        ? `Color ${color} copied to clipboard`
        : "Failed to copy color, check console",
    };

    dispatch(addNotification(notification));
  };

  return (
    <div className="flex w-full h-10">
      {Object.values(colors).map((color, index) => (
        <Tooltip className="flex-1" content={color} key={index}>
          <button
            className={colorClassName(index, Object.values(colors).length)}
            style={{ backgroundColor: color }}
            onClick={() => onClickColor(color)}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default ColorsBox;
