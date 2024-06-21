import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

// 递归菜单组件
const MenuItem: React.FC<{ item: IMenuItem; index: number; level: number }> = ({
  item,
  index,
  level,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  const isPathIncluded = (path: string) => {
    console.log(location.pathname);
    console.log(path.substring(1));
    return location.pathname == path.replace("#", "");
  };

  return (
    <li
      key={index}
      className={`${level === 0 ? "layout-root-menuitem" : ""} ${isOpen ? "active-menuitem" : ""} `}
    >
      {item.url ? (
        <>
          {level == 0 && (
            <div className="layout-menuitem-root-text">{item.label}</div>
          )}
          <a
            href={item.url}
            className={`${isPathIncluded(item.url) ? "active-route" : ""}`}
          >
            {item.icon && (
              <i className={`layout-menuitem-icon ${item.icon}`}></i>
            )}
            <span className="layout-menuitem-text">{item.label}</span>
          </a>
        </>
      ) : (
        <>
          {level == 0 && (
            <div className="layout-menuitem-root-text">{item.label}</div>
          )}
          <a onClick={handleToggle}>
            {item.icon && (
              <i className={`layout-menuitem-icon ${item.icon}`}></i>
            )}
            <span className="layout-menuitem-text">{item.label}</span>
            {level > 0 && item.items != undefined && item.items.length > 0 && (
              <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
            )}
          </a>
        </>
      )}
      {item.items && (
        <ul className="layout-menu">
          {item.items.map((item, itemsIndex) => (
            <MenuItem
              key={itemsIndex}
              item={item}
              level={level + 1}
              index={itemsIndex}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const AppMenu: React.FC<{ model: IMenuItem[] }> = ({ model }) => {
  //   const renderMenuItems = (items: IMenuItem[], level: number) => {
  //     return (
  //       <ul className="layout-menu">
  //         {items.map((item, index) => (
  //           <li key={index} className={level === 0 ? "layout-root-menuitem" : ""}>
  //             {item.url ? (
  //               <>
  //                 {level == 0 && (
  //                   <div className="layout-menuitem-root-text">{item.label}</div>
  //                 )}
  //                 <a href={item.url}>
  //                   {item.icon && (
  //                     <i className={`layout-menuitem-icon ${item.icon}`}></i>
  //                   )}
  //                   <span className="layout-menuitem-text">{item.label}</span>
  //                 </a>
  //               </>
  //             ) : (
  //               <>
  //                 {level == 0 && (
  //                   <div className="layout-menuitem-root-text">{item.label}</div>
  //                 )}
  //                 <a>
  //                   {item.icon && (
  //                     <i className={`layout-menuitem-icon ${item.icon}`}></i>
  //                   )}
  //                   <span className="layout-menuitem-text">{item.label}</span>
  //                   {level > 0 &&
  //                     item.items != undefined &&
  //                     item.items.length > 0 && (
  //                       <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
  //                     )}
  //                 </a>
  //               </>
  //             )}
  //             {item.items && <>{renderMenuItems(item.items, level + 1)}</>}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   };

  //   return <>{renderMenuItems(model, 0)}</>;

  return (
    <ul className="layout-menu">
      {model.map((item, index) => (
        <MenuItem key={index} item={item} level={0} index={index} />
      ))}
    </ul>
  );
};

export interface IMenuItem {
  label: string;
  icon?: string;
  url?: string;
  items?: IMenuItem[];
}
interface CustomMenuProps {
  model: IMenuItem[];
}
export default AppMenu;
