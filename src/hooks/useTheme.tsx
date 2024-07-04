import { useEffect, useState } from "react";

type IThemeReturn = [string, () => void];

export const useTheme = (): IThemeReturn => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleTheme];
};
