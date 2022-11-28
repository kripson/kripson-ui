import React, { FC, useEffect, useState } from "react";
import "./ThemeChanger.scss";

type ComponentWithChildProps = React.PropsWithChildren<{ defaultValue?: string; onChange?: (theme: string) => {}; styles?: Record<string, string | number>; changeBallStyles?: Record<string, string | number> }>;

const ThemeChanger: FC<ComponentWithChildProps> = ({ defaultValue, onChange, styles, changeBallStyles }) => {
  const [theme, setTheme] = useState(defaultValue ?? "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (onChange) {
      onChange(theme);
    }
  }, [theme]);

  return (
    <div className="kripsonui-theme-changer" onClick={toggleTheme} style={styles}>
      <div className={`kripsonui-change-ball ${theme}`} style={changeBallStyles}></div>
    </div>
  );
};

export default ThemeChanger;
