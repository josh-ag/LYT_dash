import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

export const BarChart = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      chart: {
        type: "column",
        width: "100%",
        height: "100%",
      },
      title: { text: "" },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        title: { text: null },
        labels: {
          style: {
            fontFamily: "Aeonik",
            fontSize: "20px",
            fontWeight: "400",
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
        series: {
          // general options for all series
        },

        column: {
          // shared options for all column series
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
    <Box
      w="full"
      bg="#fff"
      rounded={"4px"}
      px={"32px"}
      py={"23px"}
      minH={"369px"}
      h="auto"
    >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Box>
  );
};
