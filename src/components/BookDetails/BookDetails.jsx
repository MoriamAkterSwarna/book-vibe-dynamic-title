import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addReadBooks, addWishlistBooks } from "../../utility/addToDb";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  const data = useLoaderData();

  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);

  const book = data.find((elem) => elem.bookId === bookIdInt);

  const {
    bookName,
    author,
    category,
    image,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleAddToReadList = () => {
    addReadBooks(bookIdInt);
  };
  const handleWishList = () => {
    addWishlistBooks(bookIdInt);
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col lg:flex-row my-8  p-12">
       {/* Helmet for Dynamic Title */}
      <Helmet>
        <title>Book Details | Book Vibe</title>
      </Helmet>

      <div className=" w-full lg:w-[50%] bg-base-200 flex justify-center items-center rounded-xl mr-10">
        <img
          className="w-[80%] p-10 lg:p-2 lg:w-[60%] ml-6"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full lg:w-[50%] mt-6">
        <h1 className="text-4xl font-bold  mb-2">{bookName}</h1>
        <h2>
          By: <span className="font-bold">{author}</span>
        </h2>
        <hr className="mt-3" />
        <h3 className="my-2 text-xl font-bold">{category}</h3>
        <hr />
        <p className="mt-4">
          <span className="font-bold">Review: </span>
          {review}
        </p>

        <div className="my-3">
          <span className="text-xl font-bold mr-3">Tags:</span>
          {tags?.map((elem, index) => (
            <span
              className="text-primary  bg-gray-200 px-3 py-2  mr-2 rounded-full"
              key={index}
            >
              #{elem}
            </span>
          ))}
          <hr className="mt-6" />
        </div>

        <div className="flex my-10">
          <ul className="mr-14">
            <li>Number of Pages:</li>
            <li>Publisher:</li>
            <li>Year of Publishing:</li>
            <li>Rating:</li>
          </ul>
          <ul>
            <li>
              <span className="font-bold ">{totalPages}</span>
            </li>
            <li>
              <span className="font-bold ">{publisher}</span>
            </li>
            <li>
              <span className="font-bold ">{yearOfPublishing}</span>
            </li>
            <li>
              <span className="font-bold ">{rating}</span>
            </li>
          </ul>
        </div>

        <div>
          <button
            onClick={handleAddToReadList}
            className="btn btn-outline  hover:bg-primary focus:outline-none hover:outline-none mr-3 rounded-lg px-7"
          >
            Read
          </button>
          <button
            onClick={handleWishList}
            className="btn bg-secondary hover:bg-cyan-600 mr-3 rounded-lg px-7"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
