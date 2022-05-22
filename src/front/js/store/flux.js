const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      accepted: false,
      token: null,
      message: null,
      url: "https://3001-ricardoyepe-finalprojec-sm1lpipnufx.ws-us45.gitpod.io",
      original_title: {},
      poster_path: {},
      favoritos: [],
    },
    actions: {
      /////////////////////////////////////// Function for user logout

      logout: (history) => {
        localStorage.removeItem("token");
        history.push("/");
        console.log("Login out");
        setStore({ token: null });
        setStore({ message: null });
        setStore({ accepted: false });
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
            console.log("FLUX DATA", data);
            localStorage.setItem("token", JSON.stringify(data));
            setStore({ register: data });
            history.push("/");
          })
          .catch((error) => console.log("HA OCURRIDO UN ERROR", error));
      },

      /////////////////////////////////////// Function for user login

      login: (formData, history) => {
        const { url } = getStore();

        fetch(`${url}/api/token`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("token", JSON.stringify(data));
            history.push("/perfil");
            setStore({ token: data });
            setStore({ accepted: true });
          })
          .catch((error) => console.log("Login Error", error));
      },

      /////////////////////////////////////// Function get titles

      getTitles: () => {
        fetch("https://api.themoviedb.org/3/movie/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ original_title: data });
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
