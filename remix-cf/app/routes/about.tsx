import { MetaFunction } from "@remix-run/cloudflare";
import { CONFIG } from "config";

export const meta: MetaFunction = () => {
    return [
        { title: `关于我们 - ${CONFIG.SITE_NAME}` },
        { name: "description", content: CONFIG.SITE_DESCRIPTION },
    ];
};

export default function About() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">关于我们</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                {CONFIG.SITE_NAME}是一个致力于展示优质软件的平台，旨在帮助用户发现和使用最适合他们需求的工具。
            </p>
        </div>
    );
}