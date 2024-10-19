import React from 'react';
import SingleBookData from '../SingleBookData/SingleBookData';
import { useOutletContext } from 'react-router-dom';

const WishlistedBooks = () => {
    const { wishListedBooks } = useOutletContext();
    console.log(wishListedBooks);

    return (
        <div className="my-container relative">
        {wishListedBooks?.map((book) => (
          <SingleBookData key={book.bookId} book={book}></SingleBookData>
        ))}
      </div>
    );
};

export default WishlistedBooks;