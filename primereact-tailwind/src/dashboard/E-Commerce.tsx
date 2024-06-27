import { Chart } from "primereact/chart";
import Line, { ILine } from "../components/chart/Line";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useEffect, useState } from "react";
import Bar, { IBar } from "../components/chart/Bar";
import Pie, { IPie } from "../components/chart/Pie";

const ECommerce = () => {
  const salesData: ILine = {
    name: "Sales",
    value: "70",
    rate: 0.15,
    trendValues: [60, 66, 63, 65, 64, 70, 73],
  };
  const revenueData: ILine = {
    name: "Revenue",
    value: "$450",
    rate: 0.2,
    trendValues: [450, 470, 430, 455, 434, 425, 450],
  };
  const visitorsData: ILine = {
    name: "Visitors",
    value: "360",
    rate: -0.07,
    trendValues: [356, 390, 360, 388, 377, 380, 360],
  };
  const stockData: ILine = {
    name: "Stock",
    value: "$88",
    rate: 0.03,
    trendValues: [85, 83, 87, 89, 86, 87, 88],
  };

  const [selectedWeek, setSelectedWeek] = useState<string>("LW");
  const revenueChartDataMap: Map<string, IBar> = new Map();
  revenueChartDataMap.set("LW", {
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Profile",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  });

  revenueChartDataMap.set("TW", {
    datasets: [
      {
        label: "Revenue",
        data: [53, 59, 80, 56, 56, 78, 89],
      },
      {
        label: "Profile",
        data: [67, 88, 80, 55, 77, 89, 45],
      },
    ],
  });
  const [revenueChartData, setRevenueChartData] = useState<IBar>(
    revenueChartDataMap.get("LW") as IBar,
  );
  const weekList = [
    { name: "Last Week", code: "LW" },
    { name: "This Week", code: "TW" },
  ];

  const salesCategoryChartData: IPie = {
    labels: ["Electronics", "Fashion", "Household"],
    datasets: [
      {
        data: [540, 325, 702],
      },
    ],
  };

  const handleSelectedWeek = (code: string) => {
    // debugger;
    setSelectedWeek(code);
    let bar = revenueChartDataMap.get(code) as IBar;
    // debugger;
    setRevenueChartData(bar);
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 w-full md:col-span-6 xl:col-span-3">
        <Line data={salesData} />
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-3">
        <Line data={revenueData} />
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-3">
        <Line data={visitorsData} />
      </div>
      <div className="col-span-12 md:col-span-6 xl:col-span-3">
        <Line data={stockData} />
      </div>
      <div className="col-span-12 xl:col-span-9">
        <div className="card h-auto">
          <div className="mb-6 flex items-start justify-between">
            <span className="text-900 text-xl font-semibold">
              Revenue Overview
            </span>
            <Dropdown
              className="w-auto"
              value={selectedWeek}
              onChange={(e: DropdownChangeEvent) => handleSelectedWeek(e.value)}
              options={weekList}
              optionLabel="name"
              optionValue="code"
            />
          </div>
          <Bar data={revenueChartData} />
        </div>
      </div>
      <div className="col-span-12 xl:col-span-3">
        <Pie data={salesCategoryChartData} />
      </div>
      <div className="col-span-12 xl:col-span-8">
        <span className="text-lg font-semibold">Recent Sales</span>
      </div>
      <div className="col-span-12 xl:col-span-4">
        <span className="text-lg font-semibold">Top Products</span>
      </div>
    </div>
  );
};

export default ECommerce;
