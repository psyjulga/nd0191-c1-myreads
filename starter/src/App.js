import "./App.css";
import { useState, useEffect } from "react";
// import { search } from "./BooksAPI.js";
import Search from "./Search.js";
import Books from "./Books.js";

// TODO
// shelves and statuses
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [shelfStatus, setShelfStatus] = useState("none");
  // state => books have one of four states
  // (none, want to read, currently, reading, read)
  // we need that state on both pages
  const goToSearchPage = () => {
    setShowSearchpage(!showSearchPage);
  };
  // handle click to go to search page
  // we need to toggle that from both pages

  return (
    <div className="app">
      {showSearchPage ? (
        <Search goToSearchPage={goToSearchPage} shelfStatus={shelfStatus} />
      ) : (
        <Books goToSearchPage={goToSearchPage} shelfStatus={shelfStatus} />
      )}
    </div>
  );
}

export default App;
