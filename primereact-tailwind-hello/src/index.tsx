import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
// import 'primeicons/primeicons.css';

// 对无样式模式的较新版本的特殊表单如多选下拉我表支持不友好
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Bootstrap_PT from './passthrough/bootstrap';

import Tailwind from "primereact/passthrough/tailwind";
import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      {/* <PrimeReactProvider> */}
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
