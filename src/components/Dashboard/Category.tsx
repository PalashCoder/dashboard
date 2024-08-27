import React from "react";
import Widget from "./Widget";
import { useDashboard } from "../../contexts/DashboardContext";

interface CategoryProps {
  category: {
    id: string;
    name: string;
    widgets: Array<{ id: string; name: string }>;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { removeWidget } = useDashboard();

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-64">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => removeWidget(category.id, widget.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
