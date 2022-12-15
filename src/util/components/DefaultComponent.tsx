import React from "react";

interface DefaultComponent {
  children: React.ReactNode;
}

export default function DefaultComponent({ children }: any) {
  return <>{children}</>;
}