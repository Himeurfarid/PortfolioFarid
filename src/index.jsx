/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import Home from "../src/pages/Home.jsx";
import { Router, Route, Routes } from "@solidjs/router";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route exact path="/fr" component={Home} />
        {/* 👈 Define the home page route */}
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
