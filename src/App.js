import React from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Navbar />
      <h1>Render Test</h1>
      <p>If you can see this, React is working.</p>
    </div>
  );
}

export default App;
