import { SoftwareCard } from "~/components/SoftwareCard";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">软件展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SoftwareCard 
          title="软件1" 
          description="这是软件1的简短描述。它能够帮助用户提高工作效率。" 
          link="/software/1" 
        />
        <SoftwareCard 
          title="软件2" 
          description="软件2是一款强大的工具，适用于各种场景。" 
          link="/software/2" 
        />
        <SoftwareCard 
          title="软件3" 
          description="软件3为用户提供了创新的解决方案。" 
          link="/software/3" 
        />
      </div>
    </div>
  );
}