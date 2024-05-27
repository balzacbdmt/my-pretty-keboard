import { OrbitControls, Sphere, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface Props {
  luminosity: number;
}

function Scene({ luminosity }: Props) {
  const { scene } = useGLTF("/models/keyboard.glb");

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [2, 2, 10], fov: 1.5 }}>
        <directionalLight position={[2, 2, -4]} intensity={luminosity}>
          <Sphere args={[0.25]} visible={false} />
        </directionalLight>
        <directionalLight position={[-2, -2, 4]} intensity={luminosity}>
          <Sphere args={[0.25]} visible={false} />
        </directionalLight>
        <primitive
          object={scene}
          position={[0, 0, 0]}
          rotation={[0, 1.77, 1.2]}
        />
        <OrbitControls target={[0, 0, 0]} maxDistance={10} />
      </Canvas>
    </div>
  );
}

export default Scene;