import React, { useEffect, useState } from 'react';
import BooksCard from '../BooksCard/BooksCard';

const AllBooks = () => {

    const [books, setBooks] = useState([]); 

    useEffect(() => { 
        fetch('./booksData.json') 
        .then(response => response.json()) 
        .then(data => setBooks(data)); 
    }, []);

    return (
        <div className="w-11/12 mx-auto ">
      <h1 className="text-5xl font-bold my-10 text-center">Books </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-11/12 mx-auto mb-10">

            {
                books.map(book => <BooksCard key={book.bookId} book={book}></BooksCard> )
            }
      </div>
    </div>
    );
};

export default AllBooks;