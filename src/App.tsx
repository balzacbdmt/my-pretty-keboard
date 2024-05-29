import Scene from "./views/scene/Scene";
import Modal from "./components/modal/Modal";
import Menu from "./views/menu/Menu";
import { useState } from "react";

function App() {
  const [displayWarn, setDisplayWarn] = useState(true);

  return (
    <>
      <Scene />
      <Menu />
      {displayWarn && (
        <Modal
          title="Project under dev 🚧"
          text="This web-site is under dev, please come back later 😁"
          onClose={() => setDisplayWarn(false)}
        />
      )}
    </>
  );
}

export default App;
