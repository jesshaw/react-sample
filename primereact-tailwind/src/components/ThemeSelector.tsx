import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../hooks/useTheme";
import { Sidebar } from "primereact/sidebar";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { SelectButton } from "primereact/selectbutton";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

const ThemeSelector = ({
  themeVisible,
  setThemeVisible,
}: {
  themeVisible: boolean;
  setThemeVisible: Dispatch<SetStateAction<boolean>>;
}) => {
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
    {
      name: "amber",
      bgColor: "bg-amber-500",
    },
    {
      name: "cyan",
      bgColor: "bg-cyan-500",
    },
    {
      name: "green",
      bgColor: "bg-green-500",
    },
    {
      name: "indigo",
      bgColor: "bg-indigo-500",
    },
    {
      name: "purple",
      bgColor: "bg-purple-500",
    },
    {
      name: "teal",
      bgColor: "bg-teal-500",
    },
  ];

  const [fontSize, setFontSize] = useState<number>(14);
  const handFontSize = (size: number) => {
    if (size > 11 && size < 17) {
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}px`;
    }
  };

  const currentColorScheme = theme.split("/")[0];
  const currentTheme = theme.split("/")[1];

  // 主题
  const handleTheme = (newTheme: string) => {
    let realNewTheme = theme.replace(currentTheme, newTheme);
    handleChangeTheme(realNewTheme);
  };

  // 配色方案
  const handleColorScheme = (newScheme: string) => {
    let realNewTheme = theme.replace(currentColorScheme, newScheme);
    handleChangeTheme(realNewTheme);
  };

  useEffect(() => {
    handFontSize(fontSize);
  }, []); // 空 只执行一次

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
        <div className="grid w-48 grid-cols-4 gap-1">
          {themes.map((t, index) => {
            return (
              <div key={index}>
                <button
                  className={`h-8 w-8 cursor-pointer rounded-full border-0 ${t.bgColor}`}
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

        <h5>Scale</h5>
        <div className="flex flex-nowrap items-center">
          <Button
            className="pi pi-minus pl-3 pr-1"
            rounded
            text
            onClick={() => handFontSize(fontSize - 1)}
          />
          <div className="flex flex-nowrap gap-1">
            {[...Array(5)].map((_, index) => (
              <i
                key={index + 12}
                className={`pi pi-circle-fill ${index + 12 == fontSize ? "text-lxm-primary" : "text-lxm-surface-border"} `}
              ></i>
            ))}
          </div>
          <Button
            className="pi pi-plus pl-3 pr-1"
            rounded
            text
            onClick={() => handFontSize(fontSize + 1)}
          />
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
