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
    },
  };
};

export default getState;
