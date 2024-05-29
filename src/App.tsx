import Scene from "./views/scene/Scene";
import Menu from "./views/menu/Menu";
import { Suspense } from "react";
import Loading from "./views/loading/Loading";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Scene />
        <Menu />
      </Suspense>
    </>
  );
}

export default App;
