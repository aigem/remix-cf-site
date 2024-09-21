import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
    return [
        { title: "联系我们 - 软件展示网站" },
        { name: "description", content: "与我们取得联系" },
    ];
};

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">联系我们</h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                如果您有任何问题或建议,请随时与我们联系。
            </p>
            <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">
                邮箱: contact@example.com
            </p>
        </div>
    );
}