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
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSelector from "./components/ThemeSelector";

const LayoutLxm = () => {
  const sidebarItems = [
    {
      label: "DASHBOARDS",
      items: [
        {
          label: "E-Commerce",
          icon: "pi pi-fw pi-home",
          command: () => {
            window.location.hash = "/";
          },
        },
        {
          label: "Banking",
          icon: "pi pi-fw pi-image",
          command: () => {
            window.location.hash = "/users";
          },
        },
      ],
    },
    {
      label: "APPS",
      items: [
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
        {
          label: "Mail",
          icon: "pi pi-fw pi-envelop",
          items: [
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
          ],
        },
      ],
    },

    {
      label: "UI Kit",
      items: [
        {
          label: "Form Layout",
          icon: "pi pi-fw pi-id-card",
          command: () => {
            window.location.hash = "/uikit/formlyaout";
          },
        },
        {
          label: "Input",
          icon: "pi pi-fw pi-check-square",
          command: () => {
            window.location.hash = "/uikit/input";
          },
        },
        {
          label: "Float Label",
          icon: "pi pi-fw pi-bookmark",
          command: () => {
            window.location.hash = "/uikit/floatlabel";
          },
        },
        {
          label: "Invalid State",
          icon: "pi pi-fw pi-box",
          command: () => {
            window.location.hash = "/uikit/invalidstate";
          },
        },
        {
          label: "Button",
          icon: "pi pi-fw pi-exclamation-circle",
          command: () => {
            window.location.hash = "/uikit/button";
          },
        },
        {
          label: "Table",
          icon: "pi pi-fw pi-table",
          command: () => {
            window.location.hash = "/uikit/table";
          },
        },
        {
          label: "List",
          icon: "pi pi-fw pi-list",
          command: () => {
            window.location.hash = "/uikit/list";
          },
        },
        {
          label: "Tree",
          icon: "pi pi-fw pi-share-alt",
          command: () => {
            window.location.hash = "/uikit/tree";
          },
        },
        {
          label: "Panel",
          icon: "pi pi-fw pi-tablet",
          command: () => {
            window.location.hash = "/uikit/panel";
          },
        },
        {
          label: "Overlay",
          icon: "pi pi-fw pi-clone",
          command: () => {
            window.location.hash = "/uikit/overlay";
          },
        },
        {
          label: "Media",
          icon: "pi pi-fw pi-image",
          command: () => {
            window.location.hash = "/uikit/media";
          },
        },
        {
          label: "Menu",
          icon: "pi pi-fw pi-bars",
          command: () => {
            window.location.hash = "/uikit/menu";
          },
        },
        {
          label: "Message",
          icon: "pi pi-fw pi-comment",
          command: () => {
            window.location.hash = "/uikit/message";
          },
        },
        {
          label: "File",
          icon: "pi pi-fw pi-file",
          command: () => {
            window.location.hash = "/uikit/file";
          },
        },
        {
          label: "Chart",
          icon: "pi pi-fw pi-chart-bar",
          command: () => {
            window.location.hash = "/uikit/charts";
          },
        },
        {
          label: "Misc",
          icon: "pi pi-fw pi-circle-off",
          command: () => {
            window.location.hash = "/uikit/misc";
          },
        },
      ],
    },
  ];

  // const sidebarItems = [
  //     {
  //         label: 'File',
  //         items: [
  //             {
  //                 label: 'New',
  //                 icon: 'pi pi-fw pi-plus',
  //                 items: [
  //                     {
  //                         label: 'Project',
  //                         icon: 'pi pi-fw pi-folder-open',
  //                         items: [
  //                             {
  //                                 label: 'Project 1',
  //                                 icon: 'pi pi-fw pi-file'
  //                             },
  //                             {
  //                                 label: 'Project 2',
  //                                 icon: 'pi pi-fw pi-file'
  //                             }
  //                         ]
  //                     },
  //                     {
  //                         label: 'Other',
  //                         icon: 'pi pi-fw pi-plus'
  //                     }
  //                 ]
  //             },
  //             {
  //                 label: 'Open',
  //                 icon: 'pi pi-fw pi-external-link'
  //             },
  //             {
  //                 label: 'Quit',
  //                 icon: 'pi pi-fw pi-times'
  //             }
  //         ]
  //     },
  //     {
  //         label: 'Edit',
  //         items: [
  //             {
  //                 label: 'Undo',
  //                 icon: 'pi pi-fw pi-undo'
  //             },
  //             {
  //                 label: 'Redo',
  //                 icon: 'pi pi-fw pi-repeat'
  //             }
  //         ]
  //     }
  // ];
  // const breadItems = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }];
  const breadItems = [{ label: "Electronics" }];
  const home = { icon: "pi pi-home", url: "#" };

  const ptBreadCrumb = {
    root: "bg-red-500",
  };

  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <ThemeProvider initialTheme="light/blue">
      <div className="layout-contianer">
        <div className="layout-sidebar">
          <div className="sidebar-header">logo</div>
          <div className="layout-menu-container">
            <Menu className="w-full border-0" model={sidebarItems} />
          </div>
        </div>
        <div className="layout-content-wrapper">
          <div className="layout-topbar">
            <div className="topbar-start">
              <button
                type="button"
                className="topbar-menubutton p-link p-trigger"
                onClick={() => setMenuVisible(true)}
              >
                <i className="pi pi-bars" />
              </button>
              <div className="topbar-breadcrumb">
                {/* <BreadCrumb model={breadItems} home={home} pt={{ root: { className: 'bg-opacity-0'} }}/>                             */}
                {/* <BreadCrumb model={breadItems} home={home}  className= ' border-0 bg-opacity-0'/> */}
                <BreadCrumb model={breadItems} home={home} />
              </div>
            </div>
            <div className="topbar-end">
              <div className="topbar-menu">
                <div className="topbar-search">
                  <i className="pi pi-search"></i>
                  <InputText placeholder="Search" className="h-8 pl-6" />
                </div>
                <ThemeSelector></ThemeSelector>
                {/* <button className="layout-config-button config-link" type="button"><i className="pi pi-cog"></i></button> */}
                <Avatar
                  image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                  shape="circle"
                />
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
        {/* <button
          className="layout-config-button config-link"
          type="button"
          onClick={() => setThemeVisible(true)}
        >
          <i className="pi pi-cog"></i>
        </button> */}
        <div className="layout-mask"></div>
      </div>
    </ThemeProvider>
  );
};

export default LayoutLxm;
