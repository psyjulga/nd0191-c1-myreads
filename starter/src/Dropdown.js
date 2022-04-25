import { useState } from "react";

const Dropdown = ({ handleShelf, book }) => {
  const getShelf = () => {
    if (book.shelf) return book.shelf;
    else return "none";
  };

  const [shelf, setShelf] = useState(getShelf());

  return (
    <div className="book-shelf-changer">
      <select
        value={shelf ? shelf : "none"}
        onChange={(e) => {
          handleShelf(e, book);
          setShelf(e.target.value);
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default Dropdown;
