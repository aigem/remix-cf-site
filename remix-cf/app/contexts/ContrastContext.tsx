import { createContext, useContext, useState } from "react";

type ContrastContextType = {
  highContrast: boolean;
  toggleContrast: () => void;
};

const ContrastContext = createContext<ContrastContextType | undefined>(undefined);

export function ContrastProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast((prev) => !prev);
  };

  return (
    <ContrastContext.Provider value={{ highContrast, toggleContrast }}>
      {children}
    </ContrastContext.Provider>
  );
}

export function useContrast() {
  const context = useContext(ContrastContext);
  if (context === undefined) {
    throw new Error("useContrast 必须在 ContrastProvider 内使用");
  }
  return context;
}