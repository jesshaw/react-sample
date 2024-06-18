import React from "react";
import ReactDOM from "react-dom/client";
import AppStyled from "./AppStyled";
import AppUnstyled from "./AppUnstyled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppStyled />
    {/* <AppUnstyled /> */}
  </React.StrictMode>
);
