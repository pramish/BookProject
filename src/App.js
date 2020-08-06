import React from "react";
import "./styles.css";
import { BookContextProvider } from "./Context/BookContext";
import { Navbar } from "./Components/Navbar";

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}
