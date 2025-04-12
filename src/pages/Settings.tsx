import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks";
import { Brush, Heart, LogOut, Mail } from "lucide-react";
import { changeMode } from "../Slices/modeslice";


const Settings = () => {
  const mode = useAppSelector(state => state.mode.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <>
      <h1>Settings</h1>
      <div className="set-container">
        <button className="settingsButton" onClick={() => dispatch(changeMode())}>Dark/Ligh mode <Brush /></button>
        <button className="settingsButton">Reset favorites <Heart /></button>
        <button className="settingsButton">Contact us <Mail /></button>
        <button className="settingsButton">Log out <LogOut /></button>
      </div>
    </>
  );
};

export default Settings;
