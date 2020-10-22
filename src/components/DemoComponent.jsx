import React, { useContext, useState } from "react";
import StateContext from "../context";

const DemoComponent = () => {
  const [input, setInput] = useState("");
  const [value, dispatch] = useContext(StateContext);
  const { name } = value;

  const _handleChange = (name) => {
    setInput(name);
  };

  const _handleSubmit = (e, dispatch) => {
    e.preventDefault();
    dispatch({
      type: "CHANGE_NAME",
      name: input,
    });
  };

  return (
    <>
      <p>Welcome {name}! We have such sights to show you!</p>
      <form onSubmit={(e) => _handleSubmit(e, dispatch)}>
        <label>
          Enter a new name:
          <input
            type="text"
            name="newName"
            placeholder="New Name"
            onChange={(e) => _handleChange(e.target.value)}
            value={input}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default DemoComponent;
