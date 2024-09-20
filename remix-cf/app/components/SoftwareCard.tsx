import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface SoftwareCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function SoftwareCard({ id, title, description, icon }: SoftwareCardProps) {
  return (
    <Link to={`/software/${id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white dark:bg-gray-800 overflow-hidden shadow-soft rounded-lg transition-all duration-300 hover:shadow-lg"
      >
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="h-10 w-10"
                src={icon}
                alt={title}
              />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 px-5 py-3">
          <div className="text-sm flex items-center justify-between">
            <span className="font-medium text-primary dark:text-blue-400 group-hover:text-primary-dark transition-colors duration-300">
              了解更多
            </span>
            <ArrowRightIcon className="h-5 w-5 text-primary dark:text-blue-400" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}