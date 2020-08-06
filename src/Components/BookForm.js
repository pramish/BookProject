import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

export const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const addBooks = e => {
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author
      }
    });
    console.log(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <h1>Add Books</h1>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={e => {
          setAuthor(e.target.value);
        }}
      />
      <button className="add" onClick={addBooks} type="button">
        Add Book
      </button>
    </div>
  );
};
