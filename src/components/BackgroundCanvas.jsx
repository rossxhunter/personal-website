import ReactDOM from "react-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useStore } from "../store";

export const BackgroundCanvas = () => {
  const color = useStore((state) => state.cube);

  return (
    <Canvas id="canvas">
      <ambientLight />
      <directionalLight />
      <pointLight position={[10, 10, 10]} />
      <Cubes color={color} />
    </Canvas>
  );
};

const Cubes = ({ color }) => {
  const count = useStore((state) => state.cubeCount);
  const [cubes, setCubes] = useState([]);
  function getPosition(count, i) {
    const x = -(count - 1) * 1.25 + i * 2.5;
    const y = 0;
    const z = 0;
    return [x, y, z];
  }
  useEffect(() => {
    let newCubes = [];
    for (let i = 0; i < count; i++) {
      newCubes.push(getPosition(count, i));
    }
    setCubes(newCubes);
  }, [color, count]);

  useEffect(() => {
    console.log(cubes);
  }, [cubes]);
  return (
    <>
      {cubes.map((cube) => (
        <Box color={color} position={cube} />
      ))}
    </>
  );
};

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.rotation.z += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      {/* <sphereGeometry args={[3, 100, 100]} /> */}
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}
