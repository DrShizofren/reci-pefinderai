import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import { useAppSelector } from "../Hooks";
import { useEffect } from "react";

const Layout = () => {
  const mode = useAppSelector(state => state.mode.value)

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(mode);
}, [mode]);

  return <div className="page">
    <Navigation />
    <div className="container">
      <Outlet />
    </div>
    <div className="stars"></div>
    <div className="nebula"></div>
  </div>
};

export default Layout;