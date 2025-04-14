
import { useAppDispatch } from "../Hooks";
import { Brush, Heart, LogOut, Mail } from "lucide-react";
import { changeMode } from "../Slices/modeslice";
import { removeFavorites } from "../Slices/Favoritesslice";


const Settings = () => {

  const dispatch = useAppDispatch();
  const hanldeReset = () => {
    const confirmed = window.confirm("Are you sure you want to reset favorites?")
    if (confirmed) {
      dispatch(removeFavorites())
    } else {
      console.log("Operation canceled");
    }
  }

  return <>
    <h1>Settings</h1>
    <div className="set-container">
      <button className="settingsButton" onClick={() => dispatch(changeMode())}>Dark/Ligh mode <Brush /></button>
      <button className="settingsButton" onClick={hanldeReset}>Reset favorites <Heart /></button>
      <button className="settingsButton">Contact us <Mail /></button>
      <button className="settingsButton">Log out <LogOut /></button>
    </div>
  </>

};

export default Settings;
