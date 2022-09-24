import React, { useContext, useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Route, Routes, Link, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import starIcon from "./figma/star.svg";
import accIcon from "./figma/person.svg";
import igIcon from "./figma/ig.png";
import appleStoreIcon from "./figma/apple.png";
import googlePlayIcon from "./figma/googleplay.png";
import { Context } from "./features/store";

const About = React.lazy(() => import("./pages/about"));
const Packages = React.lazy(() => import("./pages/packages"));
const myfunc = (filter) => {
  return fetch(
    `${process.env.REACT_APP_UNSPLASH_URL}?query=${filter}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let images = [
        data.results[4]?.urls.regular,
        data.results[2]?.urls.regular,
        data.results[8]?.urls.regular,
      ];
      return images;
    })
    .catch((e) => console.log("check your network"));
};

function App() {
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    const f = (actionType, query) => {
      myfunc(query).then((res) => dispatch({ type: actionType, payload: res }));
    };
    f("ADD_BACKPACK", "forrest mountain");
    f("ADD_EUROPE", "Europian city");
    f("ADD_ASIA", "asian city");
    f("ADD_HOTELS", "hotels");
    f("ADD_CITY", "city wallpaper");
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navi />}>
            <Route index element={<Home />} />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<>...</>}>
                  <About />
                </React.Suspense>
              }
            />
            <Route
              path="packages/*"
              element={
                <React.Suspense fallback={<>...</>}>
                  <Packages />
                </React.Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <div className="main">
          <div className="left">
            <h3 className="brand-style" style={{ color: "#000" }}>
              Travel Goo
            </h3>
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div className="middle">
            <p>COMPANY</p>
            <span>About</span>
            <span>Careers</span>
            <span>Mobile</span>
          </div>
          <div className="middle">
            <p>Contact</p>
            <span>Help/FAQ</span>
            <span>Press</span>
            <span>Affiliates</span>
          </div>
          <div className="middle">
            <p>More</p>
            <span>Airlinefees</span>
            <span>Airline</span>
            <span>Low far tips</span>
          </div>
          <div className="right">
            <div>
              <p>f</p>
              <img src={igIcon} alt="" />
            </div>
            <p>Discover our app</p>
            <div>
              <img src={googlePlayIcon} alt="" />
              <img src={appleStoreIcon} alt="" />
            </div>
          </div>
        </div>
        <p className="copyright">All rights reserved@travelgoo.co</p>
      </footer>
    </div>
  );
}

export default App;

function Navi() {
  useEffect(() => {
    if (window.innerWidth < 700 && document.querySelector(".nav-container")) {
      document
        .querySelector(".nav-container")
        .classList.remove("nav-container");
    }
  }, []);
  const changedURIFunc = (e) => {
    if (e.target.tagName !== "A") return;
    document
      .querySelector(".selected-route")
      ?.classList.remove("selected-route");
    e.target.classList.add("selected-route");
  };
  return (
    <div>
      <Navbar className="navbar-style" expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand href="/" className="mx-5 brand-style">
            Travel Goo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="nav-container" id="navbarScroll">
            <Nav
              onClick={changedURIFunc}
              className=" my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link text-white mx-2 selected-route" to="/">
                Home
              </Link>
              <Link className="nav-link text-white mx-2" to="/about">
                About
              </Link>
              <Link className="nav-link text-white mx-2" to="/packages">
                Packges
              </Link>
            </Nav>
            <div>
              <img src={starIcon} alt="" width="25px" />
              <img src={accIcon} alt="" width="25px" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
