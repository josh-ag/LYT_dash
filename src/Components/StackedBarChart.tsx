import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Text, VStack } from "@chakra-ui/react";

export const StackedBarChart = ({ label }: { label: string }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      chart: {
        type: "bar",
        width: 510,
        height: 288,
      },
      colors: ["#FFF854", "#0FA44A", "#283350"],
      title: {
        text: null,
      },
      xAxis: {
        categories: ["40%", "30%", "20%", "10%"],

        title: {
          enabled: false,
        },

        labels: {
          enabled: true,
          crop: false,
          overflow: "allow",
          useHTML: true,
          inside: true,

          // formatter: (point: any) => {
          //   return `<span style="background-color:red;position:absolute;right:50px">${point.value}</span>`;
          // },
          style: {
            fontFamily: "Aeonik",
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "14.4px",
            color: "#131313",
          },
        },
        lineWidth: 0,
        gridLineWidth: 0,
        gridLineColor: "transparent",
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        },
        labels: { enabled: false },
        gridLineWidth: 0,
        lineWidth: 0,
        gridLineColor: "transparent",
      },

      plotOptions: {
        series: {
          stacking: "category",
        },
      },
      series: [
        {
          name: "Other",
          dataLabels: {
            enabled: false,
          },

          data: [200, 150, 100, 50],
        },
        {
          name: "Female",
          dataLabels: { enabled: false },
          data: [700, 500, 400, 200],
        },
        {
          name: "Male",
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            style: {
              fontFamily: "Aeonik",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14.4px",
              color: "#ffffff",
            },
          },
          data: [
            ["16-25", 400],
            ["25-35", 350],
            ["35-55", 300],
            ["55+", 150],
          ],
        },
      ],
    });
  }, []);

  return (
    <VStack h="full" align={"flex-start"} spacing={"32px"}>
      <Text
        fontSize={"16px"}
        fontWeight={"400"}
        lineHeight={"19.2px"}
        color={"#131313"}
        ml={"32px"}
      >
        {label}
      </Text>
      <Box minH={"288px"}>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Box>
    </VStack>
  );
};
