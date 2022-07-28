import { Outlet } from "react-router-dom";
import Model from "./components/Model";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Loading from "./components/Loading";
// import { useValues } from "./Context";

function Layout({ isModel, setIsModel }) {
  // const { loading } = useValues();

  // if (loading) {
  //   return <Loading />;
  // }

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
