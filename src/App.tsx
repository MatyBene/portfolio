import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
