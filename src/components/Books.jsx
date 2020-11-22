import React from "react";

const emptyBook = {

  title: "N/A",
  summary: "No Summary Available",
  category: "Unknown",
  image: "None",
  authors: "Unknown",
  publishedDate: "Unknown",
  
};

function constructBook(title, summary, link, category, image, authors, publishedDate, preview){
// Check tht all the values work and is there
  if(title === "" || title === undefined){
    title = emptyBook.title;
  }
  if(image === "" || image === undefined ){
  image = emptyBook.image;
  }
  if(category === "" || category === undefined){
    category = emptyBook.category;
  }
  if(authors === "" || authors === undefined){
    authors = emptyBook.authors;
  }
   if(publishedDate === "" || publishedDate === undefined){
    publishedDate = emptyBook.publishedDate;
  }
   if(summary === "" || summary === undefined){
    summary = emptyBook.summary;


  }

  return {
      title: title,
      summary: summary,
      link: link,
      category: category,
      image: image,
      authors: authors,
      publishedDate: publishedDate,
      preview: preview
  }
}
 const Book = ({ title, summary, link, category, image, authors, publishedDate, preview }) => {
  
  let book = constructBook(title, summary, link, category, image, authors, publishedDate, preview );
  return (
    
    <div className="book-card">
      <img  className="book-thumbnail"src={book.image} alt="book thumbail"/>
      <div className="info-container">
        <a href={book.link} target="_blank" rel="noreferrer">
          <h1>{book.title && book.title.substr(0,150)}</h1>
        </a>
        <div className="desc">
          <p id="category"><b>Category:</b> {book.category}</p>
          <p id="author"> <b>Author:</b> {book.authors}</p>
          <p id="publish"><b>Published:</b> {book.publishedDate}</p>
        </div>
      </div>
      <div className="summary"><p>{book.summary && book.summary.substr(0, 400)+"..."}</p></div>
      <a href={book.preview} target="_blank" rel="noreferrer">
        <button className="btn-info"> Read More</button>
      </a>
    </div>
  );
};

export default Book;
