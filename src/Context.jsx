import gsap from "gsap";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import DOMPurify from "dompurify";

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

  if (action.type === "GET_FOOTER_DATA") {
    return { ...state, footerData: action.data };
  }
  return state;
}

function ContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, {
    aboutData: {},
    contactData: {},
    homeData: {},
    footerData: {},
  });

  function purify(text) {
    return {
      __html: DOMPurify.sanitize(text),
    };
  }

  let requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  useEffect(() => {
    let tl = gsap.timeline({});
    if (!loading) {
      document.querySelector(".loading").classList.add("is-done");

      tl.to(".loading .loading-image", { opacity: 0, duration: 0.2 })
        .to(".loading.is-done ul li", {
          scaleY: 0,
          stagger: 0.2,
          duration: 1,
        })
        .to(".loading.is-done", { display: "none" })
        .to("body", { height: "auto", overflowY: "visible" });
    }

    return () => {
      if (loading) tl.kill();
    };
  }, [loading]);

  useEffect(() => {
    const homeData = new Promise((resolve, reject) => {
      fetch(
        "https://workceptive.com/workceptive-cms/public/api/Home",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => resolve({ type: "GET_HOME_DATA", data: result }))
        .catch((error) => reject(error));
    });

    const aboutData = new Promise((resolve, reject) => {
      fetch(
        "https://workceptive.com/workceptive-cms/public/api/About",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => resolve({ type: "GET_ABOUT_DATA", data: result }))
        .catch((error) => reject(error));
    });

    const contactData = new Promise((resolve, reject) => {
      fetch(
        "https://workceptive.com/workceptive-cms/public/api/Company/Details",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => resolve({ type: "GET_CONTACT_DATA", data: result }))
        .catch((error) => reject(error));
    });

    const footerData = new Promise((resolve, reject) => {
      fetch(
        "https://workceptive.com/workceptive-cms/public/api/Footer",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => resolve({ type: "GET_FOOTER_DATA", data: result }))
        .catch((error) => reject(error));
    });

    Promise.all([homeData, aboutData, contactData, footerData])
      .then((values) => values.forEach((item) => dispatch(item)))
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 500)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider
      value={{
        homeData: state.homeData,
        aboutData: state.aboutData,
        footerData: state.footerData,
        contactData: state.contactData,
        dispatch,
        purify,
        loading,
        setLoading,
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
