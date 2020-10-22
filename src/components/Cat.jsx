import React, { useContext } from "react";
import StateContext from "../context";

const DemoComponent = () => {
  const [value, dispatch] = useContext(StateContext);
  const { activity } = value;

  const _handleClick = (activity) => {
    dispatch({
      type: "SET_ACTIVITY",
      activity,
    });
  };

  return (
    <>
      <p>The cat is {activity}</p>
      <ul>
        <li>
          <button type="button" onClick={() => _handleClick("eating")}>
            Eating
          </button>
        </li>
        <li>
          <button type="button" onClick={() => _handleClick("playing")}>
            Playing
          </button>
        </li>
        <li>
          <button type="button" onClick={() => _handleClick("nappging")}>
            Napping
          </button>
        </li>
      </ul>
    </>
  );
};

export default DemoComponent;
