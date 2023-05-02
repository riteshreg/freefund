"use client";

import { createContext, useState } from "react";

export const LayoutContext = createContext({});

export default function LayoutContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState("funding");
  
  return (
    <LayoutContext.Provider value={{ title, setTitle }}>
      {children}
    </LayoutContext.Provider>
  );
}
