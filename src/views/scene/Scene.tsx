import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Keyboard from "./Keyboard";
import Desktop from "./Desktop";
import { degToRad } from "three/src/math/MathUtils.js";
import Camera from "./Camera";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import Lamp from "./Lamp";

function Scene() {
  const { luminosity } = useSelector((state: RootState) => state.settings);
  const [maxDistance, setMaxDistance] = useState(2);

  const handleAnimationIsComplete = () => {
    setMaxDistance(0.6);
  };

  return (
    <div className="h-screen">
      <Canvas shadows>
        <Camera handleAnimationIsComplete={handleAnimationIsComplete} />
        <OrbitControls
          target={[0, 0, 0]}
          minPolarAngle={degToRad(-60)}
          maxPolarAngle={degToRad(80)}
          maxDistance={maxDistance}
          minDistance={0.375}
        />
        <ambientLight args={["#ffffff", luminosity / 2]} />
        <spotLight
          args={["#ffffff", luminosity, -5, degToRad(45), 0.4]}
          position={[-0.5, 0.4, -0.15]}
          castShadow
        />
        <Keyboard />
        <Desktop />
        <Lamp />
      </Canvas>
    </div>
  );
}

export default Scene;
