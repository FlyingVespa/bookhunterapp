import React, { useState, useEffect } from "react";
import './assets/index.css';
import axios from "axios";
import Book from "./components/Books";
import Header from "./Header";


const App = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState();
  const [submit, setSubmit] = useState("aa");
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
   
      console.log("first time loading");
      
         axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${submit}`+"&maxResults=40")
      .then(res => {
        setBooks(res.data.items);
        console.log(res.data);
        setIsLoading(false);
        setError(false);
      })
      .catch(err => {
        setError(true);
      });
  }, [submit]);

  return (
    <div className="App">
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
    
      <div className="resultstitle"><h2>RESULTS</h2></div>
      <div className="results">
        
        
          {books && books.length > 0 && (books.map(book =>(
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
        {!books && (<div> <p>Oops....Not found. Try searching something else.</p> </div> )}
        <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
      </div>
        
    
      <div className="footer">
        HEdri
      </div>
     
      
      
    </div>
    
  );
};

export default App;