import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

export const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div>
      <li
        style={{ cursor: "pointer" }}
        onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      >
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </div>
  );
};
