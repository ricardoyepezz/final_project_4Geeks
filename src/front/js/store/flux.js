import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      url: "https://3001-ricardoyepe-finalprojec-f8ljzha88gx.ws-us45.gitpod.io",
      titles: {},
      animationTitles: {},
      comedyTitles: {},
      dramaTitles: {},
      romanceTitles: {},
      horrorTitles: {},
      poster_path: {},
      favoritos: [],
    },
    actions: {
      /////////////////////////////////////// Function for user logout

      logout: (history) => {
        localStorage.removeItem("token");
        history.push("/");
        console.log("Login out successful");
        setStore({ token: null });
        setStore({ message: null });
      },

      /////////////////////////////////////// function to register new users

      signup: (formData, history) => {
        const { url } = getStore();
        fetch(`${url}/api/signup`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Data From Flux", data);
            localStorage.setItem("token", JSON.stringify(data));
            setStore({ register: data });
            history.push("/");
          })
          .catch((error) => console.log("HA OCURRIDO UN ERROR", error));
      },

      /////////////////////////////////////// Function for user login

      login: (formData, history) => {
        const { url } = getStore();
        let token = localStorage.getItem("token");

        fetch(`${url}/api/token`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ token: data });
            localStorage.setItem("token", JSON.stringify(data));
            {
              token ? history.push("/perfil") : history.push("/login");
            }
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

      /////////////////////////////////////// Function get posters

      getPoster: () => {
        fetch(
          "https://api.themoviedb.org/3/movie/3/images?api_key=80f219d75335ab45f63896f726188fb5&language=en-US",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      /////////////////////////////////////// Function add favorites

      addFavorites: (newFavorite) => {
        const { favorites } = getStore();
        const fav = favorites.some((item) => item === newFavorite);
        if (fav === true) {
          return;
        } else {
          setStore(favorites.push(newFavorite));
        }
      },
    },

    /////////////////////////////////////// Function remove favorites

    removeFavorites: (index) => {
      const { favorites } = getStore();
      favorites.splice(index, 1);
      setStore(...favorites);
    },
  };
};

export default getState;
