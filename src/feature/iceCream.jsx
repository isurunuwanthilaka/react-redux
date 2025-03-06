import React from "react";
import { useReducer } from "react";

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    default:
      return state;
  }
};

const IceCream = () => {
  const [state, dispatch] = useReducer(iceCreamReducer, initialState);
  return (
    <div>
      <h2>Number of Icecreams - {state.numOfIceCreams}</h2>
      <button onClick={() => dispatch({ type: "BUY_ICECREAM" })}>
        Buy Icecream
      </button>
    </div>
  );
};

export default IceCream;
