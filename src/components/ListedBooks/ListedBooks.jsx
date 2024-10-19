import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadBooks, getWishlistBooks } from "../../utility/addToDb";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const booksData = useLoaderData();
  const navigate = useNavigate();

  //state for sorting books
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    navigate("readBooks"); // default route to readBooks
  }, [navigate]);

  let readListedBooks = [];
  const listedReadBooks = getReadBooks(); // get read books from local storage

  console.log(listedReadBooks);

  for (let i = 0; i < listedReadBooks.length; i++) {
    // find read books from booksData
    const findBook = booksData?.find(
      (data) => data.bookId == listedReadBooks[i]
    );
    if (findBook) {
      readListedBooks.push(findBook);
    }
  }

  let wishListedBooks = [];
  const wishListBooks = getWishlistBooks(); // get wishlist books from local storage

  for (let i = 0; i < wishListBooks.length; i++) {
    // find wishlist books from booksData
    const findBook = booksData?.find((data) => data.bookId == wishListBooks[i]);
    if (findBook) {
      wishListedBooks.push(findBook);
    }
    console.log(wishListedBooks);
  }

  // sort onChange function for sorting books
  const handleFilter = (event) => {
    setSortType(event.target.value);
  };
  // sort books based on sortType selected
  if (sortType === "totalPages") {
    readListedBooks.sort((a, b) => b.totalPages - a.totalPages);  // sort in descending order
    wishListedBooks.sort((a, b) => b.totalPages - a.totalPages);
  } 
//   na dekhaleo hobe
  else if (sortType === "rating") { 
    readListedBooks.sort((a, b) => b.rating - a.rating);
    wishListedBooks.sort((a, b) => b.rating - a.rating);
  } 
    else if (sortType === "yearOfPublishing") {
        readListedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        wishListedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

  return (
    <>

    {/*  sort dropdown  */}
      <div className="justify-end text-center mr-20 mt-4 mb-6">

    {/* Helmet for Dynamic Title */}
      <Helmet>
        <title>Listed Books | Book Vibe</title>
      </Helmet>

        <select
            value={sortType}
            onChange={handleFilter}
          className="btn  bg-primary text-white px-4 py-2 focus:outline-none focus:bg-primary rounded-md"
        >
          <option className="bg-base-200 text-black" value="">
            {" "}
            Sort By
          </option>
          <option className="bg-base-200 text-black" value="totalPages">
            Number of Pages
          </option>
          <option className="bg-base-200 text-black" value="rating">
            Rating
          </option>

            <option className="bg-base-200 text-black" value="yearOfPublishing"> Year of Publishing</option>

        </select>
      </div>



        {/*  tabs for read and wishlist books  */} 
      <Tabs
        className="w-11/12 mx-auto"
        onSelect={(index) => {
          const routes = ["readBooks", "wishListBooks"];
          navigate(routes[index]);
        }}
      >
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        {/* way 1   => using outlet inside all the TabPanel */}
        <TabPanel> 
          <Outlet context={{ readListedBooks}} />
        </TabPanel> 
        <TabPanel>
          <Outlet context={{  wishListedBooks }} />
        </TabPanel> 

        {/* way 2 => using outlet outside of the TabPanel & the TabPanel will be empty */} 
        {/* <Outlet context={{ readListedBooks, wishListedBooks }} /> */}
      </Tabs>
    </>
  );
};

export default ListedBooks;
