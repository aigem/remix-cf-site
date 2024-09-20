import { useParams, Link } from "@remix-run/react";

export default function SoftwareDetail() {
  const { id } = useParams();
  // 这里应该根据id获取软件详情，现在我们使用模拟数据
  const software = {
    title: `软件${id}`,
    description: "这是一款功能强大的软件，可以帮助用户提高工作效率。",
    features: [
      "特性1：...",
      "特性2：...",
      "特性3：...",
    ],
    downloadLink: "#"
  };

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