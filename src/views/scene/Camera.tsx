import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface Props {
  handleAnimationIsComplete?: () => void;
}

function Camera({ handleAnimationIsComplete }: Props) {
  // TODO Find a way to correctly type the useRef for a R3F group
  const cameraRef = useRef<any>();

  useEffect(() => {
    gsap.to(cameraRef.current.position, {
      duration: 3,
      x: 0,
      y: 0.4,
      z: 0.25,
      onComplete: () => {
        if (handleAnimationIsComplete) {
          handleAnimationIsComplete();
        }
      },
    });
  }, []);

  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 10, 0]} />
  );
}

export default Camera;
