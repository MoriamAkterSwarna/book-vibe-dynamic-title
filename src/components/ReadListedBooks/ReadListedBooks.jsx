import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SingleBookListCard from '../SingleBookData/SingleBookData';
import SingleBookData from '../SingleBookData/SingleBookData';

const ReadListedBooks = () => {

    const { readListedBooks } = useOutletContext();
  console.log(readListedBooks);

    return (
        <div className="my-container relative">
      {readListedBooks?.map((book) => (
        <SingleBookData key={book.bookId} book={book}></SingleBookData>
      ))}
    </div>
    );
};

export default ReadListedBooks;