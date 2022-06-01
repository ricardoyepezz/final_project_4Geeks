import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import MovieCard from "../component/MovieCard";
import "../../styles/user.css";

export const User = () => {
  const apiKey = "api_key=c7e441d69782b0348dfb84193c8a5371";
  const [list, setList] = useState([]);
  const [homeGenreList, setHomeGenreList] = useState([{}]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currMovies, setCurrMovies] = useState([{}]);

  useEffect(() => {
    setCurrMovies([]);
    setSelectedGenres([]);
    setHomeGenreList([]);
    setList([]);
    //getting the list of all movies from our flask server for our searchbar
    fetch("/api/movies").then((Response) =>
      Response.json().then((data) => setList(data.arr))
    );
    // getting the list of all genres
    fetch(`https://api.themoviedb.org/3/genre/movie/list?${apiKey}`).then(
      (Response) =>
        Response.json().then((data) => setHomeGenreList(data.genres))
    );
  }, []);

  useEffect(() => {
    setCurrMovies([]);
    if (selectedGenres.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${apiKey}&release_date.lte=2019-12-12&with_genres=${encodeURI(
          selectedGenres.join(",")
        )}`
      ).then((Response) =>
        Response.json().then((data) => setCurrMovies(data.results))
      );
    }
  }, [selectedGenres]);

  const onTagClick = (genreId) => {
    let isPresent = false;
    for (let id of selectedGenres) {
      if (id === genreId) {
        isPresent = true;
        break;
      }
    }
    if (isPresent) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genreId));
    } else {
      setSelectedGenres((selectedGenres) => [...selectedGenres, genreId]);
    }
  };
  const renderMovies = () =>
    currMovies.map((movie) => {
      if (movie) {
        return (
          <MovieCard key={movie.id + movie.original_title} movie={movie} />
        );
      } else {
        return null;
      }
    });

  return (
    <div className="container-fluid">
      <div className="HomePage">
        <div className="HomeSearch">
          {/*Rendering the searchbar */}
          <SearchBar movies={list} placeholder="Busca una película" />
        </div>

        <h2 className="genreHeader">Top de Películas por Género</h2>
        <div className="buttonGrid">
          {homeGenreList.map((genre) => (
            <div
              key={genre.id}
              onClick={() => onTagClick(genre.id)}
              className={
                selectedGenres.includes(genre.id) ? "genreTagON" : "genreTagOFF"
              }
            >
              {genre.name}
              {selectedGenres.includes(genre.id) ? (
                <i className="fa fa-times" aria-hidden="true"></i>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {/*Rendering selected genre movies */}
      <div className="container-fluid HomeMovies">
        <div className="container HomeMovieGrid">
          {currMovies.length > 0 ? renderMovies() : null}
        </div>
      </div>
    </div>
  );
};
