const head = React.createElement(
    "h1",
    id = "namaste",
    "Namaste JavaScript From React ❤️"
    );
const h1 = React.createElement(
    "h2",
    id="e1",
    "Merge 1"
);
const h2 = React.createElement(
    "h2",
    id="e2",
    "Merge 2"
);
const container = React.createElement(
    "div",
    id="d1",
    [h1,h2]
);

const root = ReactDOM.createRoot(document.getElementById("react"));
const root_nested = ReactDOM.createRoot(document.getElementById("react_nested"));
root.render(head);
root_nested.render(container);