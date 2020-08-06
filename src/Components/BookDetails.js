import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

export const BookDetails = props => {
  const { removeBook } = useContext(BookContext);
  const { title, author, id } = props.book;
  return (
    <div>
      <li style={{ cursor: "pointer" }} onClick={() => removeBook(id)} key={id}>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
      </li>
    </div>
  );
};
