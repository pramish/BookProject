import React, { useState, createContext } from "react";
// import uuid from "uuid/v1";

export const BookContext = createContext();

export const BookContextProvider = props => {
  const books = [
    {
      id: 1,
      title: "name of the wind",
      author: "patric rothfuss"
    },
    {
      id: 2,
      title: "the allchemist",
      author: "paulo coelho"
    }
  ];
  const [book, setBook] = useState(books);
  const addBook = (title, author) => {
    setBook(...book, { title, author, id: Math.random() });
  };
  const removeBook = id => {
    setBook(book.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ book, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
