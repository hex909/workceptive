import gsap from "gsap";
import { createContext, useContext, useEffect, useReducer } from "react";

const UserContext = createContext();

function reducer(state, action) {
  if (action.type === "GET_HOME_DATA") {
    return { ...state, homeData: action.data };
  }
  if (action.type === "GET_ABOUT_DATA") {
    return { ...state, aboutData: action.data };
  }
  if (action.type === "GET_CONTACT_DATA") {
    return { ...state, contactData: action.data };
  }
  if (action.type === "FALSE_LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "GET_FOOTER_DATA") {
    return { ...state, footerData: action.data };
  }
  return state;
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    aboutData: {},
    contactData: {},
    homeData: {},
    footerData: {},
    loading: true,
  });

  let requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  useEffect(() => {
    let tl;
    if (
      state.homeData.success &&
      state.aboutData.success &&
      state.footerData.success &&
      state.contactData.success
    ) {
      dispatch({ type: "FALSE_LOADING" });
      document.querySelector(".loading").classList.add("is-done");
      tl = gsap.timeline();

      tl.to(".loading.is-done", { width: 0, duration: 2 })
        .to(".loading.is-done", { opacity: 0, duration: 0.5 }, "-=.5")
        .to(".loading.is-done h1", { opacity: 0, duration: 0.5 }, "<=-1")
        .to(".loading.is-done", { display: "none" });
    }

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, [state.homeData, state.aboutData, state.contactData, state.footerData]);

  useEffect(() => {
    fetch(
      "https://workceptive.com/workceptive-cms/public/api/Home",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: "GET_HOME_DATA", data: result }))
      .catch((error) => console.log("error", error));

    fetch(
      "https://workceptive.com/workceptive-cms/public/api/About",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: "GET_ABOUT_DATA", data: result }))
      .catch((error) => console.log("error", error));

    fetch(
      "https://workceptive.com/workceptive-cms/public/api/Company/Details",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: "GET_CONTACT_DATA", data: result }))
      .catch((error) => console.log("error", error));

    fetch(
      "https://workceptive.com/workceptive-cms/public/api/Footer",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch({ type: "GET_FOOTER_DATA", data: result }))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <UserContext.Provider
      value={{
        homeData: state.homeData,
        aboutData: state.aboutData,
        footerData: state.footerData,
        loading: state.loading,
        contactData: state.contactData,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;

export function useValues() {
  return useContext(UserContext);
}
