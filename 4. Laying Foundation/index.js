import React from "react";
import ReactDOM from "react-dom";

// JSX
const head = <h1>Aman Sharma JSX</h1>;

// Component
const Head1 = () => {
  return (
    <div>
      {head}
      <p>component</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(<Head1 />);
