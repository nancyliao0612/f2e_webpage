import { useRef } from "react";
// components
import F2E from "./components/f2e/F2E";
import Bother from "./components/bother/Bother";
import WebDesign from "./components/webDesign/WebDesign";

function App() {
  const backgroundRef = useRef();

  return (
    <div ref={backgroundRef}>
      <div className="background_container">
        <F2E />
        <Bother />
      </div>
    </div>
  );
}

export default App;
