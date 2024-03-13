import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import { Box, Text, VStack } from "@chakra-ui/react";

// Include the fusioncharts library
ReactFC.fcRoot(FusionCharts, Charts);

// Chart data
const chartData = [
  {
    label: "Jan",
    value: "420000",
  },
  {
    label: "Feb",
    value: "810000",
  },
  {
    label: "Mar",
    value: "720000",
  },
];

// Chart configuration
const chartConfigs = {
  type: "stackedbar2d",
  width: "400",
  height: "400",
  dataFormat: "json",

  dataSource: {
    chart: {
      showLabels: false,
      showValue: false,
      drawCrossLine: false,
      showLegend: false,
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "group1",
            value: 40,
          },
          {
            label: "group2",
            value: 30,
          },
          {
            label: "group3",
            value: 20,
          },
          {
            label: "group4",
            value: 10,
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Male",
        color: "#283350",

        data: [
          {
            value: "121000",
          },
          {
            value: "135000",
          },
          {
            value: "123500",
          },
          {
            value: "145000",
          },
        ],
      },
      {
        seriesname: "Female",
        color: "#0FA44A",
        data: [
          {
            value: "121000",
          },
          {
            value: "135000",
          },
          {
            value: "123500",
          },
          {
            value: "145000",
          },
        ],
      },
      {
        seriesname: "Others",
        color: "#FFF854",
        label: "40%",
        data: [
          {
            value: "121000",
          },
          {
            value: "135000",
          },
          {
            value: "123500",
          },
          {
            value: "145000",
          },
        ],
      },
    ],
  },
};

export const StackBarChart = ({ label }: { label: string }) => {
  return (
    <VStack w="full">
      <Text
        fontSize={"16px"}
        fontWeight={"400"}
        lineHeight={"19.2px"}
        color={"#131313"}
      >
        {label}
      </Text>
      <Box w="full">
        <ReactFC {...chartConfigs} />
      </Box>
    </VStack>
  );
};
