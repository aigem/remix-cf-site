import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">软件展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SoftwareCard 
          title="软件1" 
          description="这是软件1的简短描述。" 
          link="/software/1" 
        />
        <SoftwareCard 
          title="软件2" 
          description="这是软件2的简短描述。" 
          link="/software/2" 
        />
        {/* 添加更多软件卡片 */}
      </div>
    </div>
  );
}

function SoftwareCard({ title, description, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-blue-500 hover:underline">
          了解更多
        </Link>
      </div>
    </div>
  );
}