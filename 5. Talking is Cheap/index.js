import React from "react";
import ReactDOM from "react-dom/client";

const Nav = () => {
  return(
    <h1>Title</h1>
  )
}
const Body = () => {
  return(
    <h1>Body</h1>
  )
}

const Footer = () => {
  return(
    <h1>footer</h1>
  )
}
// Component
const Head1 = () => {
  return (
    <>
    <Nav />
    <Body />
    <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(<Head1 />);
