import React, { useState, useEffect } from "react";
import axios from "axios";

import Book from "./components/Books";

import './assets/index.css';
import Insta from './assets/img/insta.png';
import Github from './assets/img/github.png';
import Linkd from './assets/img/linkedin.png';
import BackgroundImg from './assets/img/book.jpg';


const App = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState();
  const [submit, setSubmit] = useState("");
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
      axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${submit}`+"&maxResults=40")
      .then(res => {

let bookItems = res.data.items;
//  image={book.volumeInfo.imageLinks.thumbnail}
bookItems.forEach(bookElement => {

  //checks that that we don't get error
  if(bookElement.volumeInfo === undefined){
    bookElement.volumeInfo = {
      imageLinks:{
         thumbnail: ""
      }
    };
  }
  //final check for imagelinks to make sure it aint broken
   if(bookElement.volumeInfo.imageLinks === undefined){
    bookElement.volumeInfo.imageLinks = {
         thumbnail: ""
    };
  }
});
        setBooks(res.data.items);
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
      <div className="search">
        <input
          className="input-box"
          type="text"
          placeholder="Search for a book"
          value={search}
          onChange={updateSeach}
        />
        <button className="btn-submit" type="submit">Search</button>
        </div>
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
        </div>
        <img id="bgImg"src={BackgroundImg} alt=""/>
        <footer>
          <div className="footer">
            <a href="https://www.linkedin.com/in/hedrinel/"><img className="icon" src={Insta} alt=""/></a>
            <a href="https://https://github.com/FlyingVespa/bookhunterapp"><img className="icon" src={Github} alt=""/></a>
            <a href="https://www.linkedin.com/in/hedrinel/"><img className="icon" src={Linkd} alt=""/></a>
              <p>Helena Nel &copy; 2020 </p>
          </div>
          </footer>
       </div>
  );
};

export default App;