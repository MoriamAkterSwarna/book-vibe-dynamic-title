import React from "react";
import Banner from "../Banner/Banner";
import AllBooks from "../AllBooks/AllBooks";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
         {/* Helmet for Dynamic Title */}
      <Helmet>
        <title>Home | Book Vibe</title>
      </Helmet>

      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Home;
