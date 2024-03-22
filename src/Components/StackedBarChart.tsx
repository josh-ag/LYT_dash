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
        width: "100%",
        height: 400,
      },
      colors: ["#FFF854", "#0FA44A", "#283350"],
      title: {
        text: null,
      },
      xAxis: {
        title: {
          enabled: false,
        },
        labels: { enabled: false },
        lineWidth: 0,
        gridLineWidth: 0,
        gridLineColor: "transparent",
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

      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          stacking: "category",
        },
      },
      series: [
        {
          name: "Other",
          dataLabels: { enabled: false },
          data: [
            ["", 200],
            ["", 150],
            ["", 100],
            ["", 50],
          ],
        },
        {
          name: "Female",
          dataLabels: { enabled: false },
          data: [
            ["", 700],
            ["", 500],
            ["", 400],
            ["", 150],
          ],
        },
        {
          name: "Male",
          dataLabels: {
            formatter: (point: any) => console.log(point),
            enabled: true,
            format: "{point.y}",
            style: {
              fontFamily: "Aeonik",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14.4px",
              color: "#fff",
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
    <VStack
      h="full"
      w="full"
      justify={"center"}
      align={"flex-start"}
      spacing={"32px"}
    >
      <Text
        fontSize={"16px"}
        fontWeight={"400"}
        lineHeight={"19.2px"}
        color={"#131313"}
        ml={"32px"}
      >
        {label}
      </Text>
      <Box w="full">
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Box>
    </VStack>
  );
};
