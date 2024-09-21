import { SoftwareCard } from "~/components/SoftwareCard";
import { useLoaderData, useNavigation } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { useMemo } from "react";

interface Software {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const loader: LoaderFunction = async () => {
  // 这里应该从 API 获取数据
  return [
    { id: "1", title: "软件1", description: "这是一款功能强大的软件，可以帮助用户提高工作效率。", icon: "/icons/software1.svg" },
    { id: "2", title: "软件2", description: "软件2是一款适用于各种场景的强大工具。", icon: "/icons/software2.svg" },
    { id: "3", title: "软件3", description: "软件3为用户提供了创新的解决方案。", icon: "/icons/software3.svg" },
  ] as Software[];
};

export default function Index() {
  const softwareList = useLoaderData<Software[]>();
  const navigation = useNavigation();

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "软件展示网站",
    "url": "https://yourdomain.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }), []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              欢迎来到软件展示网站
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              探索我们精选的软件产品，提升您的工作效率和创新能力。
            </p>
          </div>
          <div className="mt-16">
            {navigation.state === "loading" ? (
              <div className="text-center">
                <p className="text-xl text-gray-500">加载中...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {softwareList.map((software) => (
                  <SoftwareCard key={software.id} {...software} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}