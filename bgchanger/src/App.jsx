import { useState } from "react";

function ColorButton({ color, setColor }) {
  return (
    <button
      className="border px-4 py-2 text-white rounded m-1"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
}

function App() {
  const [color, setColor] = useState("white");
   
  return (
    <div style={{ backgroundColor: color, height: "100vh" }} className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl text-white" >Selected Color: {color}</h1>
      
      {/* Reusable Buttons */}
      <ColorButton color="red" setColor={setColor} />
      <ColorButton color="blue" setColor={setColor} />
      <ColorButton color="black" setColor={setColor} />
      <ColorButton color="green" setColor={setColor} />
    </div>
  );
}

export default App;
