import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import LayoutLxm from "./layout/LayoutLxm";
import LxmButton from "./uikit/Button";
import LxmInput from "./uikit/Input";
import ECommerce from "./dashboard/E-Commerce";

const Users = () => (
  <div
    className="p-grid p-align-center p-justify-center"
    style={{ height: "100vh" }}
  >
    <Card title="Users">
      <p>User management content goes here.</p>
    </Card>
  </div>
);

const Settings = () => (
  <div
    className="p-grid p-align-center p-justify-center"
    style={{ height: "100vh" }}
  >
    <Card title="Settings">
      <p>Settings management content goes here.</p>
    </Card>
  </div>
);

// 在React中，函数组件是定义UI的一种简洁方式。等同于function Layout(){}
const Layout = () => {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location.hash = "/";
      },
    },
    {
      label: "About",
      icon: "pi pi-fw pi-info",
      command: () => {
        window.location.hash = "/users";
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-envelope",
      command: () => {
        window.location.hash = "/settings";
      },
    },
  ];
  return (
    <div>
      <Menubar model={items} />

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h1 style={{ fontWeight: "normal" }}>Sidebar Content</h1>
        <Button
          type="button"
          onClick={() => setVisible(false)}
          label="Close"
          className="p-button-secondary"
        />
      </Sidebar>

      <Button
        icon="pi pi-bars"
        onClick={() => setVisible(true)}
        className="p-mr-2 p-mt-2"
      />

      <div className="p-m-2">
        <Outlet />
      </div>
    </div>
  );
};

const LayoutBasic = () => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-blue-500 py-4 text-center text-white">
        Left Column
      </div>
      <div className="w-1/2 bg-gray-200 py-4 text-center">
        <Outlet />
      </div>
    </div>
  );
};

const LayoutResponsive = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location.hash = "/";
      },
    },
    {
      label: "About",
      icon: "pi pi-fw pi-info",
      command: () => {
        window.location.hash = "/users";
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-envelope",
      command: () => {
        window.location.hash = "/settings";
      },
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="bg-blue-500 py-4 text-center text-white">
        <Menubar model={items} />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full bg-blue-300 py-4 text-center text-white md:w-1/6">
          Left Column
        </div>
        <div className="w-full bg-gray-200 py-4 text-center md:w-5/6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutLxm />}>
          <Route index element={<ECommerce />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="uikit/button" element={<LxmButton />} />
          <Route path="uikit/input" element={<LxmInput />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
