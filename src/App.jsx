import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import "./sass/index.scss";

function App() {
  const [isModel, setIsModel] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isModel={isModel} setIsModel={setIsModel} />}
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
