import { MeshPhysicalMaterial } from "three";

export const metal = (color: string) =>
  new MeshPhysicalMaterial({
    color,
    roughness: 0.5,
    metalness: 0.5,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
  });
