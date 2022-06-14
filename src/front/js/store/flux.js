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
      users: {},
      comments: {},
    },

    /////////////////////////////////////// Function for user logout
    actions: {
      logout: (history) => {
        localStorage.clear();
        console.log("Login out successful");
        setStore({ token: null });
        history.push("/");
      },

      /////////////////////////////////////// function to register new users

      signup: (formData, history) => {
        //fetch(process.env.BACKEND_URL + `/api/signup`, {
        fetch(
          "https://3001-ricardoyepe-finalprojec-gydaf7vi22c.ws-us47.gitpod.io/api/signup",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Data From Flux", data);
            //localStorage.setItem("token", JSON.stringify(data));
            //setStore({ register: data });
            history.push("/");
            window.location.reload();
          })
          .catch((error) =>
            console.log("Ha ocurrido un error en el registro", error)
          );
      },

      /////////////////////////////////////// function to post new comments

      commentPost: (formData) => {
        fetch(
          "https://3001-ricardoyepe-finalprojec-yitmki5v8qz.ws-us47.gitpod.io/api/comment",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("new comment", data);
            window.location.reload();
          })
          .catch((error) =>
            console.log("Ha ocurrido un error en el registro", error)
          );
      },

      /////////////////////////////////////// Function for user login

      login: (formData, history) => {
        //fetch(process.env.BACKEND_URL + `/api/token`, {
        fetch(
          "https://3001-ricardoyepe-finalprojec-gydaf7vi22c.ws-us47.gitpod.io/api/token",
          {
            method: "POST",
            body: formData,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ token: data });
            localStorage.setItem("token", JSON.stringify(data));
            history.push("/user");
            window.location.reload();
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
          `https://api.themoviedb.org/3/movie/${id}?api_key=c7e441d69782b0348dfb84193c8a5371&language=es-ES`
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ titleDetail: data });
          })
          .catch((err) => console.error(err));
      },

      /////////////////////////////////////// Function get users

      getUser: (id) => {
        fetch(process.env.BACKEND_URL + `/api/user${id}`)
          .then((response) => response.text())
          .then((result) => {
            setStore({ users: result });
          })
          .catch((error) => console.log("error", error));
      },

      /////////////////////////////////////// Function get comments

      getComments: () => {
        fetch(process.env.BACKEND_URL + `/api/comments`)
          .then((response) => response.json())
          .then((result) => {
            setStore({ comments: result });
          })
          .catch((error) => console.log("error", error));
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

      addFavorites: (movieTitle, userId, movieId) => {
        const { favorites } = getStore();
        const datos = {
          id: movieId,
          user: userId,
          movie_name: movieTitle,
        };
        var favoritos = localStorage.getItem("favoritos") || "[]";
        favoritos = JSON.parse(favoritos);

        // buscamos el producto en la lista de favoritos
        var posLista = favoritos.find(function (e) {
          return e.id == datos.id;
        });
        if (posLista > -1) {
          // si está, lo quitamos
          favoritos.slice(posLista, 1);
        } else {
          // si no está, lo añadimos */
          favoritos.push(datos);

          // guardamos la lista de favoritos
          localStorage.setItem("favoritos", JSON.stringify(favoritos));
          setStore({ favorites: favoritos });
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
