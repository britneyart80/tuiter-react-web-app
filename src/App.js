import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import HelloWorld from "./labs/a6/hello-world";
import Labs from "./labs/index";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Assignment6 from "./labs/a6";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter" element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
