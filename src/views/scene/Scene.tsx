import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Keyboard from "./Keyboard";
import Floor from "./Floor";
import { degToRad } from "three/src/math/MathUtils.js";
import Camera from "./Camera";
import { useState } from "react";

interface Props {
  luminosity: number;
}

function Scene({ luminosity }: Props) {
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

        <ambientLight args={["white", luminosity]} />
        <directionalLight position={[-0.25, 0.2, 0.25]} intensity={luminosity}>
          <Sphere args={[1]} visible={false} />
        </directionalLight>

        <Floor />
        <Keyboard />
      </Canvas>
    </div>
  );
}

export default Scene;
