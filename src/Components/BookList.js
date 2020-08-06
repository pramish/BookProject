import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import { BookDetails } from "./BookDetails";

export const BookList = props => {
  const { book } = useContext(BookContext);
  return book.length ? (
    <div className="book-list">
      <ul>
        {book.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      No Books to read. You can enjoy your time.......
    </div>
  );
};
