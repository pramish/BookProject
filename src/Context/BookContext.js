import React, { createContext, useReducer } from "react";
import { bookReducer } from "../Reducers/bookReducer";

export const BookContext = createContext();

export const BookContextProvider = props => {
  const [book, dispatch] = useReducer(bookReducer, []);
  return (
    <BookContext.Provider value={{ book, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
