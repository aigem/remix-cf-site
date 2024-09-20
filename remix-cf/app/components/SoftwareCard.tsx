import { Link } from "@remix-run/react";

interface SoftwareCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function SoftwareCard({ id, title, description, icon }: SoftwareCardProps) {
  return (
    <Link to={`/software/${id}`} className="group">
      <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10" src={icon} alt={title} />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm">
            <span className="font-medium text-primary group-hover:text-primary-dark transition-colors duration-300">
              了解更多 &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}