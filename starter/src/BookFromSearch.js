import Cover from "./Cover.js";
import Dropdown from "./Dropdown.js";

const BookFromSearch = ({ books, update, backendBooks }) => {
  // books come from search api - without shelf props
  // we compare the searched books with those from the backend
  // if in backend: they already have a shelf prop
  // so we take the one from the backend
  // if new: add a shelf prop with value "none"
  // merge all together and map through for render

  const findBooks = (books) => (id) => books.find((b) => b.id === id);
  const findBookById = findBooks(backendBooks);

  const withShelf = (obj) => {
    obj.shelf = "none";
    return obj;
  };

  let comparedBooks = [];

  if (books && books.length > 0) {
    books.forEach((a) => {
      const found = findBookById(a.id);
      comparedBooks.push(found !== undefined ? found : withShelf(a));
    });
  }

  // for handling a new select in dropdown
  const handleShelf = (event, book) => {
    const selectedShelf = event.target.value;
    update(book, selectedShelf);
  };

  return (
    <>
      {comparedBooks && comparedBooks.length > 0 ? (
        comparedBooks.map((book) => {
          if (book.imageLinks) {
            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <Cover link={book.imageLinks.smallThumbnail} />
                    <Dropdown handleShelf={handleShelf} book={book} />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.authors
                      ? book.authors.map((author, index) => {
                          return <div key={index}>{author}</div>;
                        })
                      : "no author"}
                  </div>
                </div>
              </li>
            );
          } else {
            return "";
          }
        })
      ) : (
        <p>no books found</p>
      )}
    </>
  );
};

export default BookFromSearch;
