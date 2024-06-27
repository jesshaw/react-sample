import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import _ from "lodash";
import { useTheme } from "../../hooks/useTheme";

export interface IBar {
  datasets: IBarData[];
}

export interface IBarData {
  label: string;
  data: number[];
}

const Bar = ({ data }: { data: IBar }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { theme } = useTheme();

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary",
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const borderColor = documentStyle.getPropertyValue("--primary-color");
    const borderColorSecondary =
      documentStyle.getPropertyValue("--primary-300");

    // console.log(theme);
    const initData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          fill: false,
          backgroundColor: borderColor,
          borderColor: borderColor,
          borderWidth: 1, // 将线条宽度设置为 1 像素
          barThickness: 12,
          // pointRadius: 0, // 隐藏数据点
          // tension: 0.4, //弧度
          borderRadius: Number.MAX_VALUE,
          borderSkipped: "bottom",
        },
        {
          label: "First Dataset",
          fill: false,
          backgroundColor: borderColorSecondary,
          borderColor: borderColorSecondary,
          borderWidth: 1, // 将线条宽度设置为 1 像素
          barThickness: 12,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: "bottom",
        },
      ],
    };

    // let realData = { ...initData, ...data }; //浅拷贝
    let realData = _.merge(initData, data); //深拷贝借助lodash
    // debugger;
    // console.log(JSON.stringify(data));
    // console.log(JSON.stringify(initData));
    // console.log(JSON.stringify(realData));

    const options = {
      responsive: true, // 设置为自适应
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true, // 禁用图例
          position: "bottom",
          align: "center",
          labels: {
            usePointStyle: true,
            color: textColor,
            padding: 28,
          },
        },
      },
      scales: {
        x: {
          display: false, // 隐藏横坐标轴
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          display: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
    setChartData(realData);
    setChartOptions(options);
  }, [theme, data]); //样式变化或data数据变化时重新渲染

  // console.log(data);

  return (
    <>
      <Chart
        type="bar"
        className="h-auto max-h-[300px] w-full"
        data={chartData}
        options={chartOptions}
      />
    </>
  );
};

export default Bar;
