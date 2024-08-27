// src/components/Dashboard/Category.tsx
import React from 'react';
import Widget from './Widget';
import { useDashboard } from '../../contexts/DashboardContext';

interface CategoryProps {
  category: {
    id: string;
    name: string;
    widgets: Array<{ id: string; name: string; text: string }>;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { removeWidget } = useDashboard();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="space-y-4">
        {category.widgets.map(widget => (
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