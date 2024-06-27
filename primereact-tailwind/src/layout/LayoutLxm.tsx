import { Menubar } from "primereact/menubar";
import { Outlet } from "react-router-dom";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useRef, useState, useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeSelector from "../components/ThemeSelector";
import { PanelMenu } from "primereact/panelmenu";
import { TieredMenu } from "primereact/tieredmenu";
import { Console } from "console";
import AppMenu from "./AppMenu";
import { sidebarData } from "./siderbarService";
import Logo from "../components/Logo";
import MyProfile from "../components/MyProfile";

const LayoutLxm = () => {
  const panelMenuItemRenderer = (item: any, options: any) => (
    <a
      className="align-items-center flex cursor-pointer px-3 py-2"
      onClick={options.onClick}
    >
      <span className={`${item.icon} text-primary`} />
      <span className={`mx-2 ${item.items && "font-semibold"}`}>
        {item.label}
      </span>
      {item.items.length > 0 && (
        <span className="pi pi-fw pi-angle-down layout-submenu-toggler" />
      )}
    </a>
  );

  const panelMenuItems = [
    {
      label: "Admin",
      icon: "pi pi-fw pi-cog",
      expanded: true,
      template: panelMenuItemRenderer,
      items: [
        {
          label: "Price Parameters",
          icon: "pi pi-fw pi-dollar",
          items: [
            {
              label: "Create",
              icon: "pi pi-fw pi-plus",
              template: panelMenuItemRenderer,
              items: [
                {
                  label: "Create1",
                  icon: "pi pi-fw pi-plus",
                  url: "/admin/price-parameter/create",
                  template: panelMenuItemRenderer,
                },
                {
                  label: "Search1",
                  icon: "pi pi-fw pi-search",
                  url: "/admin/price-parameter/search",
                  template: panelMenuItemRenderer,
                },
              ],
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-search",
              url: "/admin/price-parameter/search",
              template: panelMenuItemRenderer,
            },
          ],
        },
      ],
    },
  ];
  // const breadItems = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }];
  const breadItems = [{ label: "Electronics" }];
  const home = { icon: "pi pi-home", url: "#" };

  const ptBreadCrumb = {
    root: "bg-red-500",
  };

  const [layoutConfig, setLayoutConfig] = useState({
    ripple: true, //toggles ripple on and off
    inputStyle: "outlined", //default style for input elements
    menuMode: "static", //layout mode of the menu, valid values are "static", "overlay", "slim", "horizontal", "reveal" and "drawer"
    menuTheme: "colorScheme", //theme of the menu, valid values are "colorScheme", "primaryColor" and "transparent"
    colorScheme: "light", //color scheme of the template, valid values are "light", "dim" and "dark"
    theme: "indigo", //default component theme for PrimeReact
    scale: 14, //size of the body font size to scale the whole application
  });

  const [menuVisible, setMenuVisible] = useState(false);
  const [themeVisible, setThemeVisible] = useState(false);
  const divLayoutConatiner = useRef<HTMLDivElement>(null);
  const layoutStatic = "layout-static"; //静态
  // 静态未激活，手机屏幕激活两个2选1
  const layoutStaticInactive = "layout-static-inactive"; //静态未激活
  const layoutMobileActive = "layout-mobile-active"; //手机屏幕激活
  const blockedScroll = "blocked-scroll";
  const screenWidth = window.innerWidth;
  const layoutColorschemeMenu = "layout-colorscheme-menu"; //菜单背景设置为主题背景颜色
  const layoutPrimarycolorMenu = "layout-primarycolor-menu"; //菜单背景设置为主题颜色
  const layoutTransparentMenu = "layout-transparent-menu"; //菜单背景设置为透明颜色
  const handleMenu = () => {
    // console.log(layoutConatiner.current);
    // console.log(layoutConatiner.current?.classList);
    if (divLayoutConatiner.current?.classList.contains(layoutStaticInactive)) {
      divLayoutConatiner.current?.classList.remove(layoutStaticInactive);
    } else {
      divLayoutConatiner.current?.classList.add(layoutStaticInactive);
    }

    if (window.innerWidth < 992) {
      divLayoutConatiner.current?.classList.add(layoutMobileActive);
      document.body.classList.add(blockedScroll);
    } else {
      divLayoutConatiner.current?.classList.remove(layoutMobileActive);
    }
  };

  const hideMenu = () => {
    divLayoutConatiner.current?.classList.remove(layoutMobileActive);
    document.body.classList.remove(blockedScroll);
  };

  return (
    <ThemeProvider initialTheme="light/blue">
      <div className="layout-contianer layout-static" ref={divLayoutConatiner}>
        <div className="layout-sidebar">
          <div className="sidebar-header">
            <a className="app-logo" href="/">
              <Logo />
              <span>乐享喵</span>
            </a>
          </div>
          <div className="layout-menu-container">
            <AppMenu model={sidebarData} />
          </div>
        </div>
        <div className="layout-content-wrapper">
          <div className="layout-topbar">
            <div className="topbar-start">
              <button
                type="button"
                className="topbar-menubutton p-link p-trigger"
                onClick={() => handleMenu()}
              >
                <i className="pi pi-bars" />
              </button>
              <div className="topbar-breadcrumb">
                <BreadCrumb model={breadItems} home={home} />
              </div>
            </div>
            <div className="topbar-end">
              <div className="topbar-menu">
                <div className="topbar-search">
                  <i className="pi pi-search"></i>
                  <InputText placeholder="Search" className="h-8 pl-6" />
                </div>
                <ThemeSelector
                  themeVisible={themeVisible}
                  setThemeVisible={setThemeVisible}
                ></ThemeSelector>
                <MyProfile />
              </div>
            </div>
          </div>
          <div className="content-breadcrumb">
            <BreadCrumb model={breadItems} home={home} />
          </div>
          <div className="layout-content">
            <Outlet />
          </div>
        </div>
        <button
          className="layout-config-button config-link"
          type="button"
          onClick={() => setThemeVisible(true)}
        >
          <i className="pi pi-cog"></i>
        </button>
        <div className="layout-mask" onClick={hideMenu}></div>
      </div>
    </ThemeProvider>
  );
};

export default LayoutLxm;
