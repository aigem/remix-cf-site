import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
    return [
        { title: "关于我们 - 软件展示网站" },
        { name: "description", content: "了解我们的使命和愿景" },
    ];
};

export default function About() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">关于我们</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                我们是一个致力于展示优质软件的平台,旨在帮助用户发现和使用最适合他们需求的工具。
            </p>
        </div>
    );
}