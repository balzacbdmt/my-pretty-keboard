import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { LoopOnce, Mesh, MeshStandardMaterial } from "three";
import { RootState } from "../../reducers/store";

function Keyboard() {
  // TODO Find a way to correctly type the useRef for a R3F group
  const groupRef = useRef<any>();
  const { nodes, scene, animations } = useGLTF("/models/keyboard.glb");
  const { actions } = useAnimations(animations, groupRef);
  const colors = useSelector((state: RootState) => state.colors);

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

  const updateColor = (
    target: "key" | "text" | "top" | "bottom",
    color: string
  ) => {
    const nodesId = Object.keys(nodes).filter((key) =>
      key.includes(`_${target}`)
    );
    const material = new MeshStandardMaterial({ color });
    nodesId.forEach((id) => {
      const node = scene.getObjectByName(id) as Mesh | null;
      if (node) {
        node.material = material;
      } else {
        console.warn(`Node with id ${id} not found in the scene.`);
      }
    });
  };

  // Define the mapping between colors state properties and target keys
  const colorMapping = {
    keys: "key",
    letters: "text",
    caseTop: "top",
    caseBottom: "bottom",
  } as const;

  useEffect(() => {
    Object.keys(colors).forEach((key) => {
      const target = key as keyof typeof colors;
      updateColor(colorMapping[target], colors[target]);
    });
  }, [colors]);

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
