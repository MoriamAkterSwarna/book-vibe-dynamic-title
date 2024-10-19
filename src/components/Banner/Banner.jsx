import React from 'react'; 

import heroImg from '../../assets/hero_img.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-[80vh] bg-base-200 w-11/12 mx-auto rounded-2xl mt-6">
        <div className="flex flex-col lg:flex-row-reverse  items-center w-9/12 mx-auto ">
          <div className=" w-full lg:w-1/2 lg:ml-10 mt-6">
            <img src={heroImg} className="w-4/5  lg:w-3/4  mx-auto lg:ml-14" />
          </div>
          <div className="w-full flex flex-col justify-center items-center lg:items-start mt-6 lg:w-1/2 ">
            <h1 className=" text-2xl lg:text-5xl font-bold mx-auto">
              Books to freshen <br /> up your bookshelf
            </h1>
  
            <Link to="/listedBooks">
              <button className=" bg-primary px-4 py-3 rounded-md mt-10 lg:ml-10 text-white mb-8">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;