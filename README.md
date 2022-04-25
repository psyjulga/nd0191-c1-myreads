# MyReads Project

This is my submission for the final assessment project for Udacity's React Fundamentals course.

It is a library app with two pages: main and search.
On the main page, all your books are shown on three different shelves (read, want to read, currently reading).
You can change the shelf via the dropdown menu.
The search page allows you to search for books and add them to your shelves.
Everything is saved in the backend.

To use the app:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
