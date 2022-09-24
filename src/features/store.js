import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialPictures = {
  Backpack: [""],
  Europe: [""],
  "South asia": [""],
  Honeymoon: [""],
  More: [""],
};

export default function Store({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialPictures);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export const Context = createContext(initialPictures);
