// src/components/Dashboard/Dashboard.tsx

import React from "react";
import { useDashboard } from "../../contexts/DashboardContext";
import Category from "./Category";
import AddWidgetDrawer from "./AddWidgetDrawer";

const Dashboard: React.FC = () => {
  const { categories } = useDashboard();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">CNAPP Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <AddWidgetDrawer />
    </div>
  );
};

export default Dashboard;
