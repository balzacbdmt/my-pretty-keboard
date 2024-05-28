import Scene from "./views/scene/Scene";
import Modal from "./components/modal/Modal";
import { useState } from "react";
import Menu from "./views/menu/Menu";

function App() {
  const [displayWarn, setDisplayWarn] = useState(false);
  const [luminosity, setLuminosity] = useState(3);

  return (
    <>
      <Scene luminosity={luminosity} />
      <Menu luminosity={luminosity} setLuminosity={setLuminosity} />
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