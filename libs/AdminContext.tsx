"use client";
import { createContext, useState } from "react";

export interface AdminContextTypes {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminLayoutContext = createContext<AdminContextTypes | null>(null);

export default function AdminContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AdminLayoutContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AdminLayoutContext.Provider>
  );
}
