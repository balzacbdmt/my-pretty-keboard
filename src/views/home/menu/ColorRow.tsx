import ColorField from "../../../components/colorField/ColorField";

interface Props {
  name: string;
  value: string;
  onChange: (hex: string) => void;
}

function ColorRow({name, value, onChange}: Props) {
  return (
    <div className="flex gap-2 items-center" key={name}>
      <label className="font-semibold capitalize" htmlFor={name}>
        {name}
      </label>
      <ColorField color={value} onChange={onChange} />
    </div>
  );
}

export default ColorRow;
