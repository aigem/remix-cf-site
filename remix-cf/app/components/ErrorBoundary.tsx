import { useRouteError } from "@remix-run/react";

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