import React, { useContext } from "react";
import StateContext from "../context";

const handleChange = (e, dispatch) => {
  dispatch({
    type: "CHANGE_NAME",
    name: e.target.value,
  });
};

const DemoComponent = () => {
  const [value, dispatch] = useContext(StateContext);
  const { name } = value;
  return (
    <>
      <p>Hi, my name is {name}</p>
      <form>
        <input
          type="text"
          name="newName"
          placeholder="New Name"
          onChange={(e) => handleChange(e, dispatch)}
        />
      </form>
    </>
  );
};

export default DemoComponent;
