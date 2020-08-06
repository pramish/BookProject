import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import "../styles.css";

export const Navbar = () => {
  const { book } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Pramish ToDo list</h1>
      <p>Currently there are {book.length} todos</p>
    </div>
  );
};
