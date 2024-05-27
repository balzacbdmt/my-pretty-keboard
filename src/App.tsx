import Scene from "./components/scene/Scene";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {
  const [displayWarn, setDisplayWarn] = useState(true);

  return (
    <>
      <Scene />
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
