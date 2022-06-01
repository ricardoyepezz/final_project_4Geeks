const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      titles: {},
      titleDetail: {},
      animationTitles: {},
      comedyTitles: {},
      dramaTitles: {},
      romanceTitles: {},
      horrorTitles: {},
      searchResults: {},
      poster_path: {},
      favorites: [],
    },

    /////////////////////////////////////// Function for user logout
    actions: {
      logout: () => {
        localStorage.clear();
        console.log("Login out successful");
        setStore({ token: null });
      },

      /////////////////////////////////////// function to register new users

      signup: (formData) => {
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Data From Flux", data);
            localStorage.setItem("token", JSON.stringify(data));
            setStore({ register: data });
          })
          .catch((error) => console.log("HA OCURRIDO UN ERROR", error));
      },

      /////////////////////////////////////// Function for user login

      login: (formData) => {
        fetch(process.env.BACKEND_URL + "/api/token", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ token: data });
            localStorage.setItem("token", JSON.stringify(data));
          })
          .catch((error) => console.log("Login Error", error));
      },

      /////////////////////////////////////// Function get titles

      getMovies: () => {
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=c7e441d69782b0348dfb84193c8a5371&language=es-ES&page=1"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ titles: data });
          })
          .catch((err) => console.error(err));
      },

      /////////////////////////////////////// Function get titles detail

      getTitleDetail: (id) => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c7e441d69782b0348dfb84193c8a5371&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ titleDetail: data });
          })
          .catch((err) => console.error(err));
      },
      /////////////////////////////////////// Function get animation titles

      getAnimationTitles: () => {
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=c7e441d69782b0348dfb84193c8a5371&with_genres=16"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ animationTitles: data });
          })
          .catch((err) => console.error(err));
      },

      /////////////////////////////////////// Function get comedy titles

      getComedyTitles: () => {
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=c7e441d69782b0348dfb84193c8a5371&with_genres=35"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ comedyTitles: data });
          })
          .catch((err) => console.error(err));
      },

      /////////////////////////////////////// Function get drama titles

      getDramaTitles: () => {
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=c7e441d69782b0348dfb84193c8a5371&with_genres=18"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ dramaTitles: data });
          })
          .catch((err) => console.error(err));
      },

      /////////////////////////////////////// Function get romance titles

      getRomanceTitles: () => {
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=c7e441d69782b0348dfb84193c8a5371&with_genres=10749"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ romanceTitles: data });
          })
          .catch((err) => console.error(err));
      },

      /////////////////////////////////////// Function get horror titles

      getHorrorTitles: () => {
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=c7e441d69782b0348dfb84193c8a5371&with_genres=27"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ horrorTitles: data });
          })
          .catch((err) => console.error(err));
      },

      /////////////////////////////////////// Function add favorites

      addFavorites: (newFavorite) => {
        const { favorites } = getStore();
        const fav = favorites.some((item) => item === newFavorite);
        //localStorage.setItem("movies", fav);
        if (fav === true) {
          return;
        } else {
          setStore(favorites.push(newFavorite));
        }
      },

      /////////////////////////////////////// Function remove favorites

      removeFavorites: (index) => {
        const { favorites } = getStore();
        favorites.splice(index, 1);
        setStore(...favorites);
        //localStorage.removeItem("movies");
      },
    },
  };
};

export default getState;
