import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-full px-6 py-3 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
