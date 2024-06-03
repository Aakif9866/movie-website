"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 select-none transition-colors duration-300  dark:bg-gray-700 min-h-screen ">
        {children}
      </div>
    </ThemeProvider>
  );
}
