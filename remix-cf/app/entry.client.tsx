import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { CONFIG } from "config";

async function hydrate() {
    const Backend = await import("i18next-http-backend").then((module) => module.default);
    const { getInitialNamespaces } = await import("remix-i18next");

    await i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(Backend)
        .init({
            supportedLngs: CONFIG.SUPPORTED_LANGUAGES,
            fallbackLng: CONFIG.DEFAULT_LANGUAGE,
            ns: getInitialNamespaces(),
            backend: {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
            },
        });

    startTransition(() => {
        hydrateRoot(
            document,
            <StrictMode>
                <I18nextProvider i18n={i18next}>
                    <RemixBrowser />
                </I18nextProvider>
            </StrictMode>
        );
    });
}

if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
} else {
    window.setTimeout(hydrate, 1);
}