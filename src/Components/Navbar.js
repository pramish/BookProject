import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import "../styles.css";

export const Navbar = () => {
  const { book } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Pramish Reading List</h1>
      <p>Currently there are {book.length} books</p>
    </div>
  );
};
