import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import tailwindStyles from "./styles/tailwind.css";
import patternStyles from "./styles/patterns.css";
import { ContrastProvider } from "~/contexts/ContrastContext";
import { useTranslation } from "react-i18next";
import "./i18n";
import { useState, useEffect, useCallback } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { LoadingIndicator } from "./components/LoadingIndicator";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: patternStyles },
];

export const meta: MetaFunction = () => [
  { title: "软件展示网站" },
  { name: "description", content: "探索我们精选的软件产品，提升您的工作效率和创新能力。" },
];

export default function App() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => setDarkMode((prev: boolean) => !prev), []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [darkMode]);

  return (
    <html lang="zh" className={`h-full ${darkMode ? 'dark' : ''}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out">
        <ContrastProvider>
          <LoadingIndicator />
          <div className="min-h-full">
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                      <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
                      <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">软件展示网站</span>
                    </Link>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      <Link to="/" className="border-primary text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        {t('home')}
                      </Link>
                      <Link to="/about" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        {t('about')}
                      </Link>
                      <Link to="/contact" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                        {t('contact')}
                      </Link>
                    </div>
                  </div>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </nav>

            <main className="bg-pattern dark:bg-gray-900">
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Outlet />
              </div>
            </main>

            <footer className="bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-base text-gray-500 dark:text-gray-400">
                  {t('copyright')}
                </p>
              </div>
            </footer>
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ContrastProvider>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold text-red-600">出错了</h1>
      <p className="mt-4 text-gray-600">{error.message}</p>
    </div>
  );
}