import React from "react";
import { render } from "react-dom";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootPage } from "./components/RootPage";
import { Input } from "./components/input";
import { Table } from "./components/Table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:key" element={<RootPage />} />
        <Route path="/edit/:key" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
