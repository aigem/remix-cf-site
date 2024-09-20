import { useParams, Link } from "@remix-run/react";

const softwareData = {
  "1": {
    title: "软件1",
    description: "这是一款功能强大的软件，可以帮助用户提高工作效率。",
    features: [
      "特性1：自动化工作流程",
      "特性2：智能数据分析",
      "特性3：实时协作功能",
    ],
    downloadLink: "#"
  },
  "2": {
    title: "软件2",
    description: "软件2是一款适用于各种场景的强大工具。",
    features: [
      "特性1：跨平台兼容",
      "特性2：高度可定制",
      "特性3：安全加密",
    ],
    downloadLink: "#"
  },
  "3": {
    title: "软件3",
    description: "软件3为用户提供了创新的解决方案。",
    features: [
      "特性1：人工智能辅助",
      "特性2：云端同步",
      "特性3：直观的用户界面",
    ],
    downloadLink: "#"
  }
};

export default function SoftwareDetail() {
  const { id } = useParams();
  const software = softwareData[id as keyof typeof softwareData];

  if (!software) {
    return <div>软件不存在</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; 返回首页
      </Link>
      <h1 className="text-4xl font-bold mb-6">{software.title}</h1>
      <p className="text-xl mb-6">{software.description}</p>
      <h2 className="text-2xl font-semibold mb-4">主要特性</h2>
      <ul className="list-disc list-inside mb-6">
        {software.features.map((feature, index) => (
          <li key={index} className="mb-2">{feature}</li>
        ))}
      </ul>
      <a 
        href={software.downloadLink} 
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        下载软件
      </a>
    </div>
  );
}