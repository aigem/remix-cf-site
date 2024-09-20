import { Link } from "@remix-run/react";

interface SoftwareCardProps {
  title: string;
  description: string;
  link: string;
}

export function SoftwareCard({ title, description, link }: SoftwareCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
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