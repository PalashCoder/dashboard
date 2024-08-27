// src/app/page.tsx
"use client"
import Dashboard from "../components/Dashboard/Dashboard";
import { DashboardProvider } from "../contexts/DashboardContext";

export default function Home() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}
