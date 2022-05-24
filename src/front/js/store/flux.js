import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      url: "https://3001-ricardoyepe-finalprojec-f8ljzha88gx.ws-us45.gitpod.io",
      titles: {},
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
          // actualizamos estado de store.people en donde obtenemos que data (proveniente de la api) se cargará en el objeto people
          .then((data) => {
            setStore({ titles: data });
          })
          .catch((err) => console.error(err));
      },
      /* const endPoint =
          "https://api.themoviedb.org/3/discover/movie?api_key=c7e441d69782b0348dfb84193c8a5371&language=es-ES&page=1";
        axios.get(endPoint).then((response) => {
          const apiData = response.data;
          setStore({ titles: apiData.results });
        });
      }, */

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
