import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesDirective,
  AccumulationSeriesCollectionDirective,
  PieSeries,
  Inject,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import { pieChartData } from "../../data/dummy";
import { Tooltip } from "@syncfusion/ej2-react-popups";

const Pie = () => {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header
          category="Pie Chart"
          title="Comparison of Proportional values"
        />
        <AccumulationChartComponent id="charts">
          <Inject services={[PieSeries, Legend, Tooltip]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName="x"
              yName="y"
              text="text"
              type="Pie"
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </>
  );
};

export default Pie;
