import React, { useReducer } from "react";
import { StateProvider } from "./context";
import DemoComponent from "./components/DemoComponent";

function App() {
  const initialState = {
    name: "Sean",
  };

  const reducer = (state, action) => {
    const { name } = action;
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <DemoComponent />
      </StateProvider>
    </div>
  );
}

export default App;
