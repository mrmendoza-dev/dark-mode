import reactLogo from "./assets/react.svg";
import { ThemeProvider } from "./components/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import viteLogo from "/vite.svg";

export const App = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex items-center justify-center gap-8 p-6 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm shadow-lg">
              <img
                src={viteLogo}
                className="h-16 w-16 object-contain"
                alt="Vite logo"
              />
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-600" />
              <img
                src={reactLogo}
                className="h-16 w-16 object-contain animate-spin-slow"
                alt="React logo"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-center">
              Vite + React
            </h1>

            <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
              <ThemeToggle />

              <p className="text-gray-600 dark:text-gray-300 text-center">
                Edit{" "}
                <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 font-mono text-sm">
                  src/App.tsx
                </code>{" "}
                and save to test HMR
              </p>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
