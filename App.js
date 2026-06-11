
import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "main hu bacha"),
    React.createElement("h1", {}, "main hu bacha"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "main hu bacha"),
    React.createElement("h1", {}, "main hu bacha"),
  ]),
]);
const heading = React.createElement(
  "h1",
  {
    style: {
      background: "black",
      color: "white",
    },
  },
  "hello Bhai shivam  kese  ho tum bhai ",
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading); //object

root.render(parent); //reader method conveting the heading object into html tag
