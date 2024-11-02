import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <main>
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;
