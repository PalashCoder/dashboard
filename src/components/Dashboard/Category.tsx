import React from "react";
import { useDashboard } from "../../contexts/DashboardContext";
import DonutChart from "../Charts/DonutChart";
import BarChart from "../Charts/BarChart";
import Widget from "../Widgets/Widget";

interface CategoryProps {
  category: {
    id: string;
    name: string;
    widgets: Array<{
      id: string;
      name: string;
      data: Array<number>;
      labels: Array<string>;
      colors: Array<string>;
    }>;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { removeWidget } = useDashboard();

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.widgets.map((widget) => (
          <div className="bg-gray-50 p-4 rounded-md relative" key={widget.id}>
            <h3 className="text-lg font-medium mb-2">{widget.name}</h3>
            <Widget widgets={widget} name={category.name} />
            <button
              onClick={() => removeWidget(category.id, widget.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
