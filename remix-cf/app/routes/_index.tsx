import { SoftwareCard } from "~/components/SoftwareCard";
import { useLoaderData, useRouteError, useNavigation } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/cloudflare";
import { useMemo } from "react";
import { CONFIG } from "config";

interface Software {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const loader: LoaderFunction = async ({ context }) => {
  try {
    const { env } = context.cloudflare;
    console.log('开始获取软件数据');
    const response = await fetch(`${CONFIG.API_BASE_URL}/software`);
    if (!response.ok) {
      console.error(`API请求失败，状态码: ${response.status}`);
      throw new Error(`API请求失败，状态码: ${response.status}`);
    }
    const data = await response.json();
    console.log('成功获取软件数据', { count: data.length });
    return json(data);
  } catch (error) {
    console.error('获取软件数据时出错:', error);
    // 返回模拟数据作为后备方案
    return json([
      { id: "1", title: "软件1", description: "这是一款功能强大的软件，可以帮助用户提高工作效率。", icon: "/icons/software1.svg" },
      { id: "2", title: "软件2", description: "软件2是一款适用于各种场景的强大工具。", icon: "/icons/software2.svg" },
      { id: "3", title: "软件3", description: "软件3为用户提供了创新的解决方案。", icon: "/icons/software3.svg" },
    ]);
  }
};

// ... 其余代码保持不变

export default function Index() {
  const softwareList = useLoaderData<Software[]>();
  const navigation = useNavigation();

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": CONFIG.SITE_NAME,
    "url": CONFIG.SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${CONFIG.SITE_URL}/search?q={search_term_string}`,
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
              {CONFIG.SITE_NAME}
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              {CONFIG.SITE_DESCRIPTION}
            </p>
          </div>
          <div className="mt-16">
            {navigation.state === "loading" ? (
              <div className="text-center">
                <p className="text-xl text-gray-500">加 载 中 .... </p>
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