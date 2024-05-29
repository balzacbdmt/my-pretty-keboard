import { useGLTF } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";

function Lamp() {
  const { scene } = useGLTF("/models/office_lamp/scene.gltf");

  return (
    <group scale={0.005}>
      <primitive
        object={scene}
        position={[-70, 0, -20]}
        rotation={[0, degToRad(-30), 0]}
      />
    </group>
  );
}

export default Lamp;
