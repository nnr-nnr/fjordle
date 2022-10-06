import React, { Suspense } from "react";
import "../style/Geo.css";
import { OrbitControls } from "@react-three/drei";

import EarthSatelliteMap from "../assets/textures/8k_earth_daymap.jpeg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpeg";
// import EarthNormalMap from "../assets/textures/2k_earth_normal_map.tif";

import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
export default function MyGlobe2(props) {
  const [dayMap, cloudsMap] = useLoader(TextureLoader, [
    EarthSatelliteMap,
    EarthCloudsMap,
  ]);
  return (
    <div className="globeHolder">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <mesh>
            <sphereGeometry args={[2.5002, 32, 32]}></sphereGeometry>
            <meshPhongMaterial
              map={cloudsMap}
              opacity={0.2}
              depthWrite={true}
              transparent={true}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[2.5, 32, 32]}></sphereGeometry>
            <meshStandardMaterial map={dayMap} />
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              zoomSpeed={0.6}
              panSpeed={0.6}
              rotateSpeed={0.4}
              maxDistance={8}
              minDistance={2.6}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[2.503, 60, 30]}></sphereGeometry>
            <meshPhongMaterial
              color="red"
              wireframe
              opacity={0.2}
              transparent={true}
            />
          </mesh>
          {/* <mesh>
            <cylinderGeometry args={[2, 2, 4, 30]}></cylinderGeometry>
            <meshPhongMaterial color="hotpink" />
          </mesh> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
// "rgb(198,179,102)"
