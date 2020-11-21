import React, { useState, useEffect } from "react";
import './assets/index.css';
import './assets/styles.css';
import axios from "axios";
import Book from "./components/Books";

const App = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState();
  const [submit, setSubmit] = useState(" ");
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(false);

  const updateSeach = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setSubmit(search);
    setSearch("");
  };

  useEffect(() => {
    if(`${submit}` === " " || `${submit}` === ""){
      console.log("first time loading");
      
      return (
        <div className="App">
          <div className="header">
              <img className="header logo" src="openbook.png" alt="a"/>
              <h1 className="header title">BOOKHUNTER</h1>
          </div>
          <div className=" header slogan"><p>Bound to find something ...</p></div>
          <form onSubmit={getSearch}>
            <input
              className="search-box"
              type="text"
              placeholder="Search for a book"
              value={search}
              onChange={updateSeach}
            />
            <button className="btn-submit"type="submit">Search</button>
          </form>
        </div>
      );
    }

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${submit}`)
      .then(res => {
        setBooks(res.data.items);
      }).then(() => {
        //config setup / removing errors ect...
        setIsLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [submit,search]);

  return (
    <div className="App">
      <div className="header">
        <img className="logo-img" src="openbook.png" alt="a"/>
        <h1 className="header-title">BOOKHUNTER</h1>
      </div>
      <div className="slogan"><p>Bound to find something ...</p></div>
      <form onSubmit={getSearch}>
        <input
          className="input-box"
          type="text"
          placeholder="Search for a book"
          value={search}
          onChange={updateSeach}
        />
        <button className="btn-submit" type="submit">Search</button>
      </form>
      <div className="results">
        <h2>RESULTS</h2>
          {books && books.length > 0 && (
          books.map(book => (
            <Book
              key={book.id}
              title={book.volumeInfo.title}
              summary={book.volumeInfo.description}
              link={book.volumeInfo.infoLink}
              category={book.volumeInfo.categories}
              image={book.volumeInfo.imageLinks.thumbnail}
              authors={book.volumeInfo.authors}
              publishedDate={book.volumeInfo.publishedDate}
              preview={book.volumeInfo.previewLink}
            />
           
          ))
        )}
        {!books && (
          <div> <p>Oops....Not found. Try searching something else.</p> </div>
        )}
      </div>
    </div>
  );
};

export default App;
