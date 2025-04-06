import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Outlet />
      </div>
      <div className="stars"></div>
      <div className="nebula"></div>
    </>
  )
};

export default Layout;