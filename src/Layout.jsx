import { Outlet } from "react-router-dom";
import Model from "./components/Model";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Layout({ isModel, setIsModel }) {
  return (
    <>
      <Navbar isModel={isModel} setIsModel={setIsModel} />
      {isModel && (
        <Model
          className={`${isModel ? "is-active" : ""}`}
          setIsModel={setIsModel}
        />
      )}
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
