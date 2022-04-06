import React, { Suspense } from "react";
import "./App.css";

const Home = React.lazy(() => import("./app/containers/Home"));

function App() {
  return (
    <Suspense fallback="...Loading">
      <Home />
    </Suspense>
  );
}

export default App;
