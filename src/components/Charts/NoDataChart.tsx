import React from "react";

interface NoDataWidgetProps {
  title: string;
}

const NoDataWidget: React.FC<NoDataWidgetProps> = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="flex items-center justify-center h-40 bg-gray-100 rounded">
        <p className="text-gray-500">No Graph data available!</p>
      </div>
    </div>
  );
};

export default NoDataWidget;
