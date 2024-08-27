"use client";
import React, { useState } from "react";
import { useDashboard } from "../../contexts/DashboardContext";

const AddWidgetDrawer: React.FC = () => {
  const { categories, addWidget } = useDashboard();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategory && widgetName && widgetText) {
      addWidget(selectedCategory, {
        id: Date.now().toString(),
        name: widgetName,
      });
      setIsOpen(false);
      setSelectedCategory("");
      setWidgetName("");
      setWidgetText("");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 bg-blue-500 text-white p-2 rounded-xl shadow-lg"
      >
        + Add Widget
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-96 p-6 h-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Add Widget</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Widget Name</label>
                <input
                  type="text"
                  value={widgetName}
                  onChange={(e) => setWidgetName(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mr-2 px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add Widget
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddWidgetDrawer;
