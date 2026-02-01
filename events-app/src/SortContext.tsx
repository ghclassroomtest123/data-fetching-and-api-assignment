import React, { createContext, useContext, useState, ReactNode } from "react";

export type SortOption = "date" | "id";

interface SortContextType {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
}

const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sortBy, setSortBy] = useState<SortOption>("id");

  return (
    <SortContext.Provider value={{ sortBy, setSortBy }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => {
  const context = useContext(SortContext);
  if (context === undefined) {
    throw new Error("useSort must be used within a SortProvider");
  }
  return context;
};
