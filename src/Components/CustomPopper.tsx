import Popper from "@mui/material/Popper";
import { useAppSelector } from "../Hooks";

const CustomPopper = (props: any) => {
  const mode = useAppSelector((state) => state.mode.value); // dark or light

  return (
    <Popper
      {...props}
      modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}
      className={`custom-popper ${mode}`}
    />
  );
};

export default CustomPopper;
