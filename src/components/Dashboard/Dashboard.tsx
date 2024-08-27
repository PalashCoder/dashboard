import React from "react";
import { useDashboard } from "../../contexts/DashboardContext";
import AddWidgetDrawer from "./AddWidgetDrawer";
import Category from "./Category";

const Dashboard: React.FC = () => {
  const { categories } = useDashboard();

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-5">CNAPP Dashboard</h1>
      <div>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <AddWidgetDrawer />
    </div>
  );
};

export default Dashboard;
