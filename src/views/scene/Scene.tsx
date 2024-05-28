import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Keyboard from "./Keyboard";

interface Props {
  luminosity: number;
}

function Scene({ luminosity }: Props) {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [2, 2, 10], fov: 1.5 }}>
        <directionalLight position={[2, 2, -4]} intensity={luminosity}>
          <Sphere args={[0.25]} visible={false} />
        </directionalLight>
        <directionalLight position={[-2, -2, 4]} intensity={luminosity}>
          <Sphere args={[0.25]} visible={false} />
        </directionalLight>
        <Keyboard />
        <OrbitControls target={[0, 0, 0]} maxDistance={10} />
      </Canvas>
    </div>
  );
}

export default Scene;
