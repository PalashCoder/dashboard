import React from 'react';

interface WidgetProps {
  widget: {
    id: string;
    name: string;
  };
  onRemove: () => void;
}

const Widget: React.FC<WidgetProps> = ({ widget, onRemove }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md relative">
      <h3 className="text-lg font-medium mb-2">{widget.name}</h3>
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        ×
      </button>
    </div>
  );
};

export default Widget;