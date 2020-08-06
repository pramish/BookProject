import React from "react";
import "./styles.css";
import { BookContextProvider } from "./Context/BookContext";
import { Navbar } from "./Components/Navbar";
import { BookList } from "./Components/BookList";

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}
