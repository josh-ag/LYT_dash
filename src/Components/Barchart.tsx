import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

export const BarChart = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      chart: {
        type: "column",
        width: null,
      },
      accessibility: { enabled: false },
      title: { text: "" },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        title: { text: null },
        labels: {
          formatter: (point: any) => {
            return point.value;
          },
          style: {
            fontFamily: "Aeonik",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#6A6A6A",
          },
        },
      },
      yAxis: {
        title: { enabled: false },
        max: 100,
        min: 0,
        labels: {
          style: {
            fontFamily: "Aeonik",
            fontSize: "20px",
            fontWeight: "400",
            color: "#6A6A6A",
          },
        },
        gridLineColor: "rgba(143, 143, 143, 30%)",
        gridLineDashStyle: "dash",
        gridLineWidth: 2,
      },

      plotOptions: {
        column: {
          color: "#0FA44A",
          opacity: 0.4,
        },
      },

      series: [
        {
          name: "Engagement Rate",
          data: [
            ["Mon", 30],
            ["Tue", 20],
            ["Wed", 63],
            ["Thur", 50],
            ["Fri", 98],
            ["Sat", 58],
            ["Sun", 80],
          ],
        },
      ],
    });
  }, []);

  return (
    <Box bg="#fff" w="full" rounded={"4px"} px={"32px"} py={"23px"}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Box>
  );
};
