import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-10'>
            <h1 className='text-5xl font-bold text-red-400'>404</h1>
            <NavLink  to="/"> <button className='btn bg-pink-600 mt- text-white'>Go back to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;