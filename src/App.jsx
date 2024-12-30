import { Fragment, useState } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    display: false,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
    display: false,
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header>
        <div className="flex gap-4">
          {routes.map((route, index) => (
            <Fragment key={index}>
              {route.display && (
                <Link to={route.path} className="hover:text-secondary">
                  {route.name}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </Header>
      <div className="flex-grow container mx-auto">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
