export const sidebarData = [
  {
    label: "DASHBOARDS",
    expanded: true,
    items: [
      {
        label: "E-Commerce",
        icon: "pi pi-fw pi-home",
        url: "/",
      },
      {
        label: "Banking",
        icon: "pi pi-fw pi-image",
        url: "#/users",
      },
    ],
  },
  {
    label: "APPS",
    items: [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        url: "/",
      },
      {
        label: "About",
        icon: "pi pi-fw pi-info",
        url: "#/users",
      },
      {
        label: "Mail",
        icon: "pi pi-fw pi-envelope",
        items: [
          {
            label: "Inbox",
            icon: "pi pi-fw pi-inbox",
            url: "#/apps/mail/inbox",
          },
          {
            label: "Compose",
            icon: "pi pi-fw pi-pencil",
            url: "#/apps/mail/compose",
          },
        ],
      },
      {
        label: "Contact",
        icon: "pi pi-fw pi-envelope",
        url: "#/settings",
      },
    ],
  },
  {
    label: "UI Kit",
    items: [
      {
        label: "Form Layout",
        icon: "pi pi-fw pi-id-card",
        url: "#/uikit/formlyaout",
      },
      {
        label: "Input",
        icon: "pi pi-fw pi-check-square",
        url: "#/uikit/input",
      },
      {
        label: "Float Label",
        icon: "pi pi-fw pi-bookmark",
        url: "#/uikit/floatlabel",
      },
      {
        label: "Invalid State",
        icon: "pi pi-fw pi-box",
        url: "#/uikit/invalidstate",
      },
      {
        label: "Button",
        icon: "pi pi-fw pi-exclamation-circle",
        url: "#/uikit/button",
      },
      {
        label: "Table",
        icon: "pi pi-fw pi-table",
        url: "#/uikit/table",
      },
      {
        label: "List",
        icon: "pi pi-fw pi-list",
        url: "#/uikit/list",
      },
      {
        label: "Tree",
        icon: "pi pi-fw pi-share-alt",
        url: "#/uikit/tree",
      },
      {
        label: "Panel",
        icon: "pi pi-fw pi-tablet",
        url: "#/uikit/panel",
      },
      {
        label: "Overlay",
        icon: "pi pi-fw pi-clone",
        url: "#/uikit/overlay",
      },
      {
        label: "Media",
        icon: "pi pi-fw pi-image",
        url: "#/uikit/media",
      },
      {
        label: "Menu",
        icon: "pi pi-fw pi-bars",
        url: "#/uikit/menu",
      },
      {
        label: "Message",
        icon: "pi pi-fw pi-comment",
        url: "#/uikit/message",
      },
      {
        label: "File",
        icon: "pi pi-fw pi-file",
        url: "#/uikit/file",
      },
      {
        label: "Chart",
        icon: "pi pi-fw pi-chart-bar",
        url: "#/uikit/charts",
      },
      {
        label: "Misc",
        icon: "pi pi-fw pi-circle-off",
        url: "#/uikit/misc",
      },
    ],
  },
  {
    label: "Hierarchy",
    items: [
      {
        label: "Submenu 1",
        icon: "pi pi-fw pi-align-left",
        items: [
          {
            label: "Submenu 1.1",
            icon: "pi pi-fw pi-align-left",
            items: [
              {
                label: "Submenu 1.1.1",
                icon: "pi pi-fw pi-align-left",
                items: [
                  {
                    label: "Submenu 1.1.1.1",
                    icon: "pi pi-fw pi-align-left",
                    url: "#/submenu-1-1-1-1",
                  },
                  {
                    label: "Submenu 1.1.1.2",
                    icon: "pi pi-fw pi-align-left",
                  },
                ],
              },
              {
                label: "Submenu 1.1.2",
                icon: "pi pi-fw pi-align-left",
              },
            ],
          },
          {
            label: "Submenu 1.2",
            icon: "pi pi-fw pi-align-left",
            items: [
              {
                label: "Submenu 1.2.1",
                icon: "pi pi-fw pi-align-left",
              },
              {
                label: "Submenu 1.2.2",
                icon: "pi pi-fw pi-align-left",
              },
            ],
          },
        ],
      },
      {
        label: "Submenu 2",
        icon: "pi pi-fw pi-align-left",
        items: [
          {
            label: "Submenu 1",
            icon: "pi pi-fw pi-align-left",
          },
          {
            label: "Submenu 2",
            icon: "pi pi-fw pi-align-left",
          },
        ],
      },
    ],
  },
];
