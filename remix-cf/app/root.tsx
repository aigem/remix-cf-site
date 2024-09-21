import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  Link
} from "@remix-run/react";

import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import tailwindStyles from "./styles/tailwind.css?url";
import patternStyles from "./styles/patterns.css?url";
import { ContrastProvider } from "~/contexts/ContrastContext";
import { useTranslation } from "react-i18next";
import "./i18n";
import { useState, useEffect, useCallback } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { CONFIG } from "config";
import { useMediaQuery } from "react-responsive";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: patternStyles },
  { rel: "icon", href: `${CONFIG.PATHS.ASSETS}/favicon.ico` },
];

export const meta: MetaFunction = () => [
  { title: CONFIG.SITE_NAME },
  { name: "description", content: CONFIG.SITE_DESCRIPTION },
];

export default function App() {
  const prefersDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  const { t } = useTranslation();

  const toggleDarkMode = useCallback(() => setIsDarkMode((prev) => !prev), []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDarkMode]);

  return (
    <html lang={CONFIG.DEFAULT_LANGUAGE} className={isDarkMode ? 'dark' : ''}>
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
                      <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">{CONFIG.SITE_NAME}</span>
                    </Link>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      <Link to={CONFIG.PATHS.HOME} className="text-gray-900 dark:text-white font-bold text-lg">

                        {t('home')}
                      </Link>
                      <Link to={CONFIG.PATHS.ABOUT} className="text-gray-900 dark:text-white font-bold text-lg">
                        {t('about')}
                      </Link>
                      <Link to={CONFIG.PATHS.CONTACT} className="text-gray-900 dark:text-white font-bold text-lg">
                        {t('contact')}
                      </Link>
                    </div>
                  </div>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
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

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html>
      <head>
        <title>出错了</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>发生了意外错误</h1>
        <p>{error instanceof Error ? error.message : "未知错误"}</p>
        <Scripts />
      </body>
    </html>
  );
}