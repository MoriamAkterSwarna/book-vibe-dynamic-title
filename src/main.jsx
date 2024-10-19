import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ReadListedBooks from './components/ReadListedBooks/ReadListedBooks';
import WishlistedBooks from './components/WishlistedBooks/WishlistedBooks';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { 
        path: "/", 
        element: <Home></Home>
      },
      {
        path:"books/:bookId", 
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json') 
      }, 
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/booksData.json'),
        children: [
          { 
            path: "readBooks", 
            element: <ReadListedBooks></ReadListedBooks>
          }, 
          {
            path: "wishlistBooks", 
            element: <WishlistedBooks></WishlistedBooks>
          }
        ]
      }
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
  </StrictMode>,
)
