import React from "react";
import ReactDOM from "react-dom/client";

import { PrimeReactProvider } from "primereact/api";
// import "primeicons/primeicons.css";

// import Tailwind from "primereact/passthrough/tailwind";

import App from "./App";
import App1 from "./App1";
import "./index.css";

// import LxmButton from "./LxmButton";

// 两种路径方式BrowserRouter服务器无刷路由，客户端hash无刷路由
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/*  无样式模式为false,启动primereact自带样式 */}
    <PrimeReactProvider value={{ unstyled: false }}>
      {/* <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}> */}
      {/* <LxmButton/> */}
      <HashRouter>
        {/* <App1/> */}
        <App />
      </HashRouter>
    </PrimeReactProvider>
  </React.StrictMode>,
);
