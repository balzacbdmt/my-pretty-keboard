import { Suspense } from "react";
import Loading from "./views/loading/Loading";
import Home from "./views/home/Home";
import NotificationManager from "./components/notification/NotificationManager";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <NotificationManager />
      <Home />
    </Suspense>
  );
}

export default App;
