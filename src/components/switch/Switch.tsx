interface Props {
  isOn: boolean;
  handleToggle: (v: boolean) => void;
}

function Switch({ isOn, handleToggle }: Props) {
  return (
    <div
      className={`${
        isOn ? "bg-blue-600" : "bg-gray-300"
      } w-12 h-6 flex items-center rounded-full p-1 cursor-pointer`}
      onClick={() => handleToggle(!isOn)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-6" : ""
        }`}
      />
    </div>
  );
}

export default Switch;
