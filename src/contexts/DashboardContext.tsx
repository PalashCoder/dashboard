// src/contexts/DashboardContext.tsx
"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface Widget {
  id: string;
  name: string;
  text: string;
}

interface Category {
  id: string;
  name: string;
  widgets: Widget[];
}

interface DashboardContextType {
  categories: Category[];
  addWidget: (categoryId: string, widget: Widget) => void;
  removeWidget: (categoryId: string, widgetId: string) => void;
  searchWidgets: (query: string) => Widget[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "w1",
          name: "Cloud Accounts",
          text: "Connected: 1, Not Connected: 2",
        },
        {
          id: "w2",
          name: "Cloud Account Risk Assessment",
          text: "Failed: 1659, Warning: 686, Not Applicable: 36, Passed: 7581",
        },
      ],
    },
    {
      id: "2",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "w3",
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available!",
        },
        { id: "w4", name: "Workload Alerts", text: "No Graph data available!" },
      ],
    },
    {
      id: "3",
      name: "Registry Scan",
      widgets: [
        {
          id: "w5",
          name: "Image Risk Assessment",
          text: "5470 total vulnerabilities",
        },
        { id: "w6", name: "Image Security Issues", text: "2 total images" },
      ],
    },
  ]);

  const addWidget = (categoryId: string, widget: Widget) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      )
    );
  };

  const removeWidget = (categoryId: string, widgetId: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter((w) => w.id !== widgetId),
            }
          : category
      )
    );
  };

  const searchWidgets = (query: string): Widget[] => {
    return categories.flatMap((category) =>
      category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <DashboardContext.Provider
      value={{ categories, addWidget, removeWidget, searchWidgets }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
