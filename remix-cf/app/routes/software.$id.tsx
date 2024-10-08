import { useParams, Link, useLoaderData, useRouteError, useNavigation } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/cloudflare";
import { CheckCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { CommentSection } from "~/components/CommentSection";
import { CONFIG } from "config";

interface Software {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  downloadLink: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  try {
    console.log(`开始获取软件 ${params.id} 的数据`);
    const response = await fetch(`${CONFIG.API_BASE_URL}/software/${params.id}`);
    if (!response.ok) {
      console.error(`API请求失败，状态码: ${response.status}`);
      const errorData = await response.json();
      throw new Response(JSON.stringify(errorData), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }
    const data = await response.json();
    console.log(`成功获取软件 ${params.id} 的数据`, data);
    return json(data);
  } catch (error) {
    console.error('Error fetching software data:', error);
    if (error instanceof Response) {
      throw error;
    }
    throw new Response(JSON.stringify({ error: "获取软件数据时出错" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export default function SoftwareDetail() {
  const software = useLoaderData<Software>();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <div className="text-center py-10">加载中...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-soft overflow-hidden sm:rounded-lg"
    >
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={software.icon}
            alt={software.title}
            className="h-12 w-12 mr-4"
          />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{software.title}</h1>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">{software.description}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">主要特性</h2>
        <ul className="space-y-3">
          {software.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start"
            >
              <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={software.downloadLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
          >
            下载软件
          </motion.a>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        <CommentSection softwareId={software.id} />
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-4 sm:px-6">
        <Link to="/" className="text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 transition-colors duration-300 flex items-center">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          返回首页
        </Link>
      </div>
    </motion.div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold text-red-600">出错了</h1>
      <p className="mt-4 text-gray-600">
        {error instanceof Error ? error.message : "发生了未知错误"}
      </p>
    </div>
  );
}