import React from "react";
import AddWidgetDrawer from "../Dashboard/AddWidgetDrawer";
import BarChart from "../Charts/BarChart";
import DonutChart from "../Charts/DonutChart";
import NoDataWidget from "../Charts/NoDataChart";

interface WidgetProps {
  widgets: {
    data: Array<number>;
    labels: Array<string>;
    colors: Array<string>;
    name: string;
    id: string;
  };
  name: string;
}

const Widget: React.FC<WidgetProps> = ({ widgets, name }) => {
  return (
    <>
      <div className="h-56">
        {widgets.id == "w3" && (
          <center className="items-center">
            <button
              className="mt-[20%] bg-gray-200 p-2 rounded-lg"
              onClick={() => <AddWidgetDrawer />}
            >
              + Add Widget
            </button>
          </center>
        )}
        {widgets.id == "w4" && <NoDataWidget title={""} />}
        {name == "CSPM Executive Dashboard" ? (
          <DonutChart
            data={widgets.data}
            labels={widgets.labels}
            colors={widgets.colors}
            title={widgets.name}
          />
        ) : (
          <BarChart
            data={widgets.data}
            labels={widgets.labels}
            colors={widgets.colors}
            title={widgets.name}
          />
        )}
      </div>
    </>
  );
};

export default Widget;
