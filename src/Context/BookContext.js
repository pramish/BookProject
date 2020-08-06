import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../Reducers/bookReducer";

export const BookContext = createContext();

export const BookContextProvider = props => {
  const [book, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("Books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("Books", JSON.stringify(book));
  }, [book]);
  return (
    <BookContext.Provider value={{ book, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
