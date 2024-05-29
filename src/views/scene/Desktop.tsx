import { Box, useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

function Desktop() {
  const texture = useTexture("/textures/dark_wood_4k.jpg");

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10);

  return (
    <Box args={[1, 0.01, 0.5]} position={[0, -0.005, 0]} receiveShadow>
      <meshStandardMaterial attach="material" map={texture} />
    </Box>
  );
}

export default Desktop;
