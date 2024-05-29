import { Suspense } from "react";
import Loading from "./views/loading/Loading";
import Home from "./views/home/Home";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}

export default App;
