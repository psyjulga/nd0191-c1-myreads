import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const Library = ({ update, books }) => {
  // function for filtering the books by their shelves
  // the books come from the backend and do already have a shelf prop
  const filterMyBooks = (books) => (shelf) =>
    books.filter((b) => b.shelf === shelf);

  const filterByShelf = filterMyBooks(books);

  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              heading={"Currently Reading"}
              books={filterByShelf("currentlyReading")}
              update={update}
            />
            <Bookshelf
              heading={"Want To Read"}
              books={filterByShelf("wantToRead")}
              update={update}
            />
            <Bookshelf
              heading={"Read"}
              books={filterByShelf("read")}
              update={update}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </>
  );
};

export default Library;
