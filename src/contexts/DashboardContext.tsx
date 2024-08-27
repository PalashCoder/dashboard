import React, { createContext, ReactNode, useContext, useState } from "react";

interface Widget {
  id: string;
  name: string;
  data: Array<number>;
  labels: Array<string>;
  colors: Array<string>;
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
          data: [1, 2],
          labels: ["Connected", "Not Connected"],
          colors: ["#4C6FFF", "#E0E7FF"],
        },
        {
          id: "w2",
          name: "Cloud Account Risk Assessment",
          data: [1659, 686, 36, 7581],
          labels: ["Failed", "Warning", "Not Applicable", "Passed"],
          colors: ["#FF4C4C", "#FFA500", "#808080", "#4CAF50"],
        },
        {
          id: "w3",
          name: "",
          data: [],
          labels: [],
          colors: [],
        },
      ],
    },
    {
      id: "2",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "w4",
          name: "Top 5 Namespace Specific Alerts",
          data: [],
          labels: [],
          colors: [],
        },
        {
          id: "w4",
          name: "Workload Alerts",
          data: [],
          labels: [],
          colors: [],
        },
        {
          id: "w3",
          name: "",
          data: [],
          labels: [],
          colors: [],
        },
      ],
    },
    {
      id: "3",
      name: "Registry Scan",
      widgets: [
        {
          id: "w7",
          name: "Image Risk Assessment",
          data: [100, 200, 300, 400, 500],
          labels: ["Critical", "High", "Medium", "Low", "Info"],
          colors: ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#0000FF"],
        },
        {
          id: "w8",
          name: "Image Security Issues",
          data: [2, 0, 0, 0],
          labels: ["Critical", "High", "Medium", "Low"],
          colors: ["#FF0000", "#FFA500", "#FFFF00", "#00FF00"],
        },
        {
          id: "w3",
          name: "",
          data: [],
          labels: [],
          colors: [],
        },
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
