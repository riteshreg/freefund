"use client";
import Card from "@/libsComponents/Card";
import "../globals.css";
import React, { createContext, useContext, useState } from "react";
import LayoutContextProvider, { LayoutContext } from "@/libs/LayoutContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const title = useContext(LayoutContext)
  
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}

