export const CONFIG = {
    SITE_NAME: "独门TVBOX",
    SITE_DESCRIPTION: "探索我们精选的TVbox类应用工具，提升您的观影及娱乐体验。",
    API_BASE_URL: "https://remix-cf-site-8hm.pages.dev/api",
    CONTACT_EMAIL: "aitips@outlook.com",

    DEFAULT_LANGUAGE: "zh",
    SUPPORTED_LANGUAGES: ["zh", "en"],
    PAGINATION: {
        ITEMS_PER_PAGE: 6,
        MAX_PAGES: 5,
    },
    SOCIAL_MEDIA: {
        TWITTER: "https://twitter.com/youraccount",
        FACEBOOK: "https://facebook.com/yourpage",
        LINKEDIN: "https://linkedin.com/company/yourcompany",
    },
    FEATURES: {
        DARK_MODE: true,
        COMMENTS: true,
        NEWSLETTER: false,
    },
    SEO: {
        GOOGLE_SITE_VERIFICATION: "your-google-site-verification-code",
        BING_SITE_VERIFICATION: "your-bing-site-verification-code",
    },
    ANALYTICS: {
        GOOGLE_ANALYTICS_ID: "UA-XXXXXXXXX-X",
    },
    CACHE: {
        MAX_AGE: 3600, // in seconds
    },
    ERROR_PAGES: {
        NOT_FOUND: "/404",
        SERVER_ERROR: "/500",
    },
    PATHS: {
        ASSETS: "/assets",
        ICONS: "/icons",
        HOME: "/",
        ABOUT: "/about",
        CONTACT: "/contact",
        SOFTWARE: "/software",
    },
};