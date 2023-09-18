/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import "./index.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import MenuFood from "./pages/MenuFood";

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
        <Route exact path="/" component={Home} />
        <Route exact path="/menus" component={MenuFood} />
        <Route exact path="/infos" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        {/* 👈 Define the home page route */}
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
