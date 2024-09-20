import { useNavigation } from "@remix-run/react";

export function LoadingIndicator() {
  const navigation = useNavigation();
  
  if (navigation.state === "idle") return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50">
      <div className="h-full w-1/3 bg-white animate-pulse"></div>
    </div>
  );
}