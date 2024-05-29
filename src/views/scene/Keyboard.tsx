import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Mesh, MeshStandardMaterial } from "three";
import { RootState } from "../../reducers/store";
import { keyMapping } from "../../constants/keyMapping";
import { degToRad } from "three/src/math/MathUtils.js";

function Keyboard() {
  const { nodes, scene } = useGLTF("/models/keyboard.glb");
  const { colors, settings } = useSelector((state: RootState) => state);

  // Define the mapping between colors state properties and target keys
  const colorMapping = {
    keys: "key",
    letters: "text",
    caseTop: "top",
    caseBottom: "bottom",
  } as const;

  // Update a specific node color
  const updateNodeColor = (id: string, material: MeshStandardMaterial) => {
    const node = scene.getObjectByName(id) as Mesh | null;
    if (node) {
      node.material = material;
    } else {
      console.warn(`Node with id ${id} not found in the scene.`);
    }
  };

  const updateGroupNodeColor = (
    target: "key" | "text" | "top" | "bottom",
    color: string
  ) => {
    const nodesId = Object.keys(nodes).filter((key) =>
      key.includes(`_${target}`)
    );
    const material = new MeshStandardMaterial({ color });
    nodesId.forEach((id) => updateNodeColor(id, material));
  };

  // Move specific key on Y axis
  const moveKeyOnYAxis = (
    keyId: string,
    textId: string,
    direction: "up" | "down"
  ) => {
    const offset = direction === "down" ? -0.003 : 0.003;
    const keyMesh = scene.getObjectByName(keyId) as Mesh | null;
    const keyText = scene.getObjectByName(textId) as Mesh | null;

    if (keyMesh) keyMesh.position.y += offset;
    if (keyText) keyText.position.y += offset;
  };

  // Key listener
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { code } = event;
      const key = keyMapping[code];

      if (!key) return;

      moveKeyOnYAxis(key.name, key.text, "down");

      if (settings.keyTestMode) {
        updateNodeColor(key.name, new MeshStandardMaterial({ color: "green" }));
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      const { code } = event;
      const key = keyMapping[code];

      if (!key) return;

      moveKeyOnYAxis(key.name, key.text, "up");
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [settings]);

  // Update nodes color when a color is updated
  useEffect(() => {
    Object.keys(colors).forEach((key) => {
      const target = key as keyof typeof colors;
      updateGroupNodeColor(colorMapping[target], colors[target]);
    });
  }, [colors]);

  // Reset keys color on turning off the key test mode
  useEffect(() => {
    if (settings.keyTestMode === false) {
      updateGroupNodeColor("key", colors.keys);
    }
  }, [settings.keyTestMode]);

  // Traverse the scene to set castShadow and receiveShadow on all mesh children
  useEffect(() => {
    scene.traverse((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[0, 0.018, 0]}
      rotation={[0, degToRad(90), degToRad(-2)]}
    />
  );
}

export default Keyboard;
