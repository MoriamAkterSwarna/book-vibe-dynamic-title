import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";

const BooksCard = ({book}) => { 

    const { bookId, bookName, author, category, rating, tags, image } = book;
    return (
      
        <Link to={`/books/${bookId}`}>
        <div className="border-2 border-gray-200 h-[460px] p-6 rounded-md ">
          <div className="bg-base-200 rounded-md">
            <img
              className="mx-auto w-1/3 h-[230px] object-contain"
              src={image}
              alt=""
            />
          </div>
  
          <div className="my-4">
            {tags?.map((elem, index) => (
              <span
                className="text-primary font-bold  px-3 py-2 text-sm  mr-2 rounded-full bg-base-200"
                key={index}
              >
                {elem}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold">{bookName}</h2>
          <h3 className="mb-4">
            By: <span className=" font-bold text-sm ">{author}</span>
          </h3>
  
          <div className="border-t-2 border-dashed mx-4">
            <div className="flex justify-between mt-3 ">
              <p>{category}</p>
              <p className="flex justify-center items-center">
                {rating}
                <FaRegStar className="ml-2" />
              </p>
            </div>
          </div>
        </div>

        </Link>
  
    );
};

BooksCard.propTypes = {
        item: PropTypes.object,
      };

export default BooksCard;