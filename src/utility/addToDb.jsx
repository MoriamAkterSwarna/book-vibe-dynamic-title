import { toast } from "react-toastify";

const getReadBooks = () => {
  const storeBook = localStorage.getItem("read-books");
  if (storeBook) {
    return JSON.parse(storeBook);
  }
  return [];
};

const addReadBooks = (id) => {
  const storedBooks = getReadBooks();
  const exists = storedBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedBooks));
    toast.success("Books  Added to Read List");
    return;
  } else {
    toast.error("You have Already Read this book!");
  }
};

const getWishlistBooks = () => {
    const wishedBook = localStorage.getItem("wishlist-books");
    if (wishedBook) {
      return JSON.parse(wishedBook);
    }
    return [];
  };
  
  const addWishlistBooks = (id) => {
    const wishListedBooks = getWishlistBooks();
    const storedBooks = getReadBooks();
    const existsReadBooks = storedBooks.find((bookId) => bookId === id);
    const exists = wishListedBooks.find((bookId) => bookId === id);
    if (existsReadBooks) {
      toast.error("You have Already Read this Books");
    } else if (!exists && !existsReadBooks) {
      wishListedBooks.push(id);
      localStorage.setItem("wishlist-books", JSON.stringify(wishListedBooks));
      toast.success("Books  Added to WishList");
    } else {
      toast.error("You have Already Added to Wishlist");
    }
  };

export { addReadBooks, getReadBooks, addWishlistBooks, getWishlistBooks };