import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/searchBar.css";

function SearchBar({ movies, placeholder }) {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const handleChange = (event) => {
    /*Handling the change in inputValue when the user types in the searchbar*/
    setNotFound(false);
    const wordEntered = event.target.value.trim();
    setInputValue(wordEntered);
    const newFilter = movies.filter((value) => {
      /*filtering the movie list according to searched movie*/
      return value.toLowerCase().includes(wordEntered.toLowerCase());
    });
    setFilteredMovies([]);
    if (newFilter.length > 0) {
      setFilteredMovies(newFilter);
    }
    if (wordEntered.length === 0) {
      setFilteredMovies([]);
    }
  };

  const buttonSubmit = () => {
    /*Submitting the searched movie*/
    let flag = false;

    for (let movie of movies) {
      if (inputValue.toLowerCase() === movie.toLowerCase()) {
        flag = true;
        break;
      }
    }
    if (flag) {
      history(`/search/${inputValue}`);
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className="SearchBody">
      <div className="CompleteBar">
        <div className="BAR">
          <input
            placeholder={placeholder}
            className="searchingbar"
            type="text"
            title="Search"
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                buttonSubmit();
              }
            }}
          />
          <button className="search-button" onClick={buttonSubmit}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      {notFound ? (
        <div className="NotFound m-1">
          Disculpa! La película que buscaste no se encuentra en nuestra base de
          datos
        </div>
      ) : null}
      {filteredMovies.length > 0 ? (
        <div className="searchList">
          {filteredMovies.slice(0, 10).map((movie) => (
            <div
              className="searchItem"
              onClick={() => history(`/search/${movie}`)}
            >
              {movie}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
