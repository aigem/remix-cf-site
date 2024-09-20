import { useParams, Link } from "@remix-run/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const softwareData = {
  "1": {
    title: "软件1",
    description: "这是一款功能强大的软件，可以帮助用户提高工作效率。",
    features: [
      "自动化工作流程",
      "智能数据分析",
      "实时协作功能",
    ],
    downloadLink: "#",
    icon: "/icons/software1.svg"
  },
  // ... 其他软件数据
};

export default function SoftwareDetail() {
  const { id } = useParams();
  const software = softwareData[id as keyof typeof softwareData];

  if (!software) {
    return <div className="text-center py-16 text-2xl text-gray-600">软件不存在</div>;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center">
          <img src={software.icon} alt={software.title} className="h-12 w-12 mr-4" />
          <h1 className="text-3xl font-bold text-gray-900">{software.title}</h1>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <p className="text-xl text-gray-700 mb-6">{software.description}</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">主要特性</h2>
        <ul className="space-y-3">
          {software.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <span className="ml-3 text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <a
            href={software.downloadLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
          >
            下载软件
          </a>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <Link to="/" className="text-primary hover:text-primary-dark transition-colors duration-300">
          &larr; 返回首页
        </Link>
      </div>
    </div>
  );
}