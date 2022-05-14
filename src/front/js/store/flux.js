const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
    },
    actions: {
      // --------------- Function sync token with SS

      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
          console.log(
            "Application just loaded, synching the session storage token"
          );
        setStore({ token: token });
      },

      // --------------- Function log out

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Login out");
        setStore({ token: null });
        setStore({ message: null });
      },

      // --------------- Function get message Home

      getMessage: () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };
        // fetching data from the backend
        fetch(
          "https://3001-ricardoyepe-finalprojec-yw0fl61y8q1.ws-us45.gitpod.io/api/hello",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      // --------------- Function sign up
      signup: (data) => {
        const opts = {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        };
        fetch(
          "https://3001-ricardoyepe-finalprojec-yw0fl61y8q1.ws-us45.gitpod.io/api/signup",
          opts
        )
          .then((res) => res.text())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },

      // --------------- function log in

      login: async (email, password) => {
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
            "https://3001-ricardoyepe-finalprojec-yw0fl61y8q1.ws-us45.gitpod.io/api/token",
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
      },
    },
  };
};

export default getState;
