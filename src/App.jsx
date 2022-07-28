import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./Layout";

// components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import "./sass/index.scss";
import { useValues } from "./Context";

function App() {
  const [isModel, setIsModel] = useState(false);
  const data = useValues();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout isModel={isModel} setIsModel={setIsModel} />}
        >
          <Route index element={<Home homeData={data.homeData} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
