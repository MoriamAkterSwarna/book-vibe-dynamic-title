

import { MdFindInPage } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
const SingleBookData = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    category,
    image,
    rating,
    tags,
    // review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
   
    <div className="card card-side w-full md:w-3/4 my-8 lg:ml-20 border p-4 mx-auto">
      <figure className="w-[300px] md:w-[230px]  bg-base-200  py-5 px-10 rounded-md mx-auto">
        <img
          className="w-[300px] md:w-[130px] mx-auto"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="p-4 ">
        <h2 className="card-title mb-4">{bookName}</h2>
        <p className=" mb-2">
          By: <span className="font-bold">{author}</span>
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-evenly">
          <div className="mb-2">
            Tags:
            {tags?.map((elem, index) => (
              <span
                className="text-primary bg-gray-200 px-2 text-sm mx-4 rounded-full"
                key={index}
              >
                #{elem}
              </span>
            ))}
          </div>
          <p className=" md:mx-10">
            <span className="inline-flex justify-center items-center">
              <CiLocationOn className="h-6 w-6 mr-2 text-gray-500" />
              Year of Publishing:{yearOfPublishing}
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-3">
          <p className="mr-8">
            <span className="inline-flex justify-center items-center">
              <HiOutlineUsers className="h-6 w-6 mr-1 text-gray-500" />
              Publisher: {publisher}
            </span>
          </p>
          <p>
            <span className="inline-flex justify-center items-center">
              <MdFindInPage className="h-6 w-6 mr-1 text-gray-500" />
              Page {totalPages}
            </span>
          </p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-around mt-2">
          <button className=" bg-blue-100 text-[#328EFF] text-sm px-3 py-0 rounded-full mr-1 my-1">
            Category: {category}
          </button>
          <button className=" bg-orange-100 text-orange-500 text-sm px-3 py-0 rounded-full mr-2 my-1">
            Rating: {rating}
          </button>
          <div className="flex justify-between">
            <Link to={`/books/${bookId}`}>
              <button className=" bg-primary text-white px-3 py-2 rounded-lg my-1">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleBookData.propTypes = {
  book: PropTypes.object,
};
export default SingleBookData;
