"use client";
import Card from "@/libsComponents/Card";
import "../globals.css";
import React, { createContext, useContext, useState } from "react";
import { ReduxProvider } from "@/libs/ReduxProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
        {children}
        </ReduxProvider>
        </body>
    </html>
  );
}
