import { Plane, useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

function Floor() {
  const texture = useTexture("/textures/dark_wood_4k.jpg");

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10);

  return (
    <Plane args={[1, 0.5]} rotation-x={degToRad(-90)}>
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
}

export default Floor;
