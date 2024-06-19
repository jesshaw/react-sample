import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../hooks/useTheme";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { SelectButton } from "primereact/selectbutton";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

const ThemeSelector = () => {
  const { theme, handleChangeTheme } = useTheme();

  const themes = [
    {
      name: "blue",
      bgColor: "bg-blue-500",
    },
    {
      name: "pink",
      bgColor: "bg-pink-500",
    },
  ];

  const [themeVisible, setThemeVisible] = useState(false);

  const currentColorScheme = theme.split("/")[0];
  const currentTheme = theme.split("/")[1];

  // 主题
  const handleTheme = (newTheme: string) => {
    let realNewTheme = theme.replace(currentTheme, newTheme);
    handleChangeTheme(realNewTheme);
  };

  // 配色方案
  const handleColorScheme = (newScheme: string) => {
    // const htmlElement = document.documentElement;
    // if (htmlElement.classList.contains("dark")) {
    //   htmlElement.classList.remove("dark");
    // } else {
    //   htmlElement.classList.add("dark");
    // }

    let realNewTheme = theme.replace(currentColorScheme, newScheme);
    handleChangeTheme(realNewTheme);
  };

  return (
    <div>
      <Button
        icon="pi pi-cog"
        rounded
        text
        severity="secondary"
        aria-label="Bookmark"
        onClick={() => setThemeVisible(true)}
      />

      <Sidebar
        position="right"
        visible={themeVisible}
        onHide={() => setThemeVisible(false)}
      >
        <h5>Themes</h5>
        <div className="flex flex-wrap gap-8">
          {themes.map((t, index) => {
            let theClassName = "h-8 w-8 rounded-full border-0 ";
            if (t.bgColor) {
              theClassName += t.bgColor;
            }
            return (
              <div key={index} className="w-3">
                <button
                  className={theClassName}
                  onClick={(e) => handleTheme(t.name)}
                >
                  {t.name === currentTheme && (
                    <i className="pi pi-check text-white"></i>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        <h5>Color Scheme</h5>
        <div className="flex flex-wrap gap-8">
          <div className="align-items-center flex">
            <RadioButton
              inputId="ingredient1"
              name="light"
              value="light"
              onChange={(e: RadioButtonChangeEvent) =>
                handleColorScheme(e.value)
              }
              checked={currentColorScheme === "light"}
            />
            <label htmlFor="ingredient1" className="ml-2">
              Light
            </label>
          </div>
          <div className="align-items-center flex">
            <RadioButton
              inputId="ingredient2"
              name="dark"
              value="dark"
              onChange={(e: RadioButtonChangeEvent) =>
                handleColorScheme(e.value)
              }
              checked={currentColorScheme === "dark"}
            />
            <label htmlFor="ingredient2" className="ml-2">
              Dark
            </label>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ThemeSelector;
