import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "a",
  { href: "https://google.pl" },
  "Google",
);

const elementInJSX = <a href="https://google.pl">Google (JSX)</a>;

console.log(element);
console.log(<h1>Hejka!</h1>);

/* ReactDOM.createRoot(document.getElementById("root")).render(element); */
ReactDOM.createRoot(document.getElementById("root")).render(elementInJSX);
