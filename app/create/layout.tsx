"use client";
import Card from "@/libsComponents/Card";
import "../globals.css";
import React, { createContext, useContext, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
