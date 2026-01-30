import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div className="app">
      <h1>React 74 – useEffect dependencies</h1>
      <input
        type="text"
        placeholder="Vpiši ime..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Pozdravljen, {name || "neznanec"} 👋</p>
    </div>
  );
}
