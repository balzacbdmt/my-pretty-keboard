interface Props {
  luminosity: number;
  setLuminosity: (l: number) => void;
}

function Menu({ luminosity, setLuminosity }: Props) {
  return (
    <div className="fixed bottom-0 w-4/5 left-1/2 -translate-x-1/2 h-[150px] bg-zinc-900 p-8 rounded-t-2xl shadow-2xl">
      <div className="flex flex-col w-[150px] gap-2">
        <label className="font-semibold" htmlFor="luminosity">Luminosity</label>
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
    </div>
  );
}

export default Menu;
