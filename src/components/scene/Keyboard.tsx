import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { LoopOnce } from "three";

function Keyboard() {
  // TODO Find a way to correctly type the useRef for a R3F group
  const groupRef = useRef<any>();
  const { scene, animations } = useGLTF("/models/keyboard.glb");
  const { actions } = useAnimations(animations, groupRef);

  // Add a listener on keys to play animation
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (animations && animations.length) {
        if (event.code === "Space") {
          actions.press_space_bar?.setLoop(LoopOnce, 1);
          actions.press_space_bar?.play().reset();
        }
        // TODO, do that for all keys...
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        position={[0, 0, 0]}
        rotation={[0, 1.77, 1.2]}
      />
    </group>
  );
}

export default Keyboard;
