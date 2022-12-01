import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "../components/floor";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
          <Floor/>
      </Canvas>
    </div>
  );
}

