// LayoutContext.tsx
import { createContext, useContext } from "react";
import { useLayout } from "../components/useLayout";

const LayoutContext = createContext<any>(null);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const layout = useLayout(); // only one instance

  return (
    <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);
