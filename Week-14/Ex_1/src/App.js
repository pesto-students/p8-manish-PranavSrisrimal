import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { flipSwitch } from "./features/flipSlice";

export default function App() {
  const lightSwitch = useSelector((state) => state.flipSwitch.isLightOn);
  const dispatch = useDispatch();
  const lightedness = lightSwitch ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => dispatch(flipSwitch())}>flip</button>
    </div>
  );
}
