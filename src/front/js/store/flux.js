const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      accepted: false,
      token: null,
      message: null,
      url: "https://3001-ricardoyepe-finalprojec-sm1lpipnufx.ws-us45.gitpod.io",
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
<<<<<<< HEAD
=======

      store: {
        original_title: {},
        poster_path:{},
        favoritos: [],
      },

      actions: {
        getTitles: () => {
          fetch("https://api.themoviedb.org/3/movie/")
            .then((res) => res.json())
            .then((data) => {
              setStore({ original_title: data });
            })
            .catch((err) => console.error(err));
        },
        getPoster: () => {
          fetch("https://api.themoviedb.org/3/movie/3/images?api_key=80f219d75335ab45f63896f726188fb5&language=en-US", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
          },

          addFavorites: (newFavorite) => {
            const { favorites } = getStore();
            const fav = favorites.some((item) => item === newFavorite);
            if (fav === true) {
              return;
            } else {
              setStore(favorites.push(newFavorite));
            }
          }},
          removeFavorites: (index) => {
            const { favorites } = getStore();
            favorites.splice(index, 1);
            setStore(...favorites);
          },
  


      /* login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            "https://3001-ricardoyepe-finalprojec-d0cbjs3u90u.ws-us45.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("There has been some error");
            return false;
          }

          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.log("There was an error", error);
        }
      }, */
>>>>>>> ce0b27afa7b3dab9895fcfbff703e44f53cd3e66
    },
  };
};

export default getState;
