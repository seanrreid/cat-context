import React, { useReducer } from "react";
import { StateProvider } from "./context";
import Demo from "./components/DemoComponent"
import Cat from "./components/Cat";

function App() {
  const initialState = {
    name: "Sean",
    activity: "purring",
  };

  const reducer = (state, action) => {
    const { name, activity } = action;
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
      case "SET_ACTIVITY":
        return {
          ...state,
          activity,
        };
      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <Demo />
        <Cat />
      </StateProvider>
    </div>
  );
}

export default App;
