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
  width: "250",
  height: "144",
  dataFormat: "json",

  dataSource: {
    chart: {
      showLabels: false,
      showValues: false,
      drawCrossLine: false,
      showLegend: false,
      showYAxisValues: false,
      // showSum: 1,
      showPercentValues: true,
      showPercentInToolTip: false,
      // stack100Percent: 1,
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "group1",
          },
          {
            label: "group2",
          },
          {
            label: "group3",
          },
          {
            label: "group4",
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
            label: "16-25",
            value: 50,
          },
          {
            label: "25-35",
            value: 35,
          },
          {
            label: "35-55",
            value: 25,
          },
          {
            label: "55+",
            value: 15,
          },
        ],
      },
      {
        seriesname: "Female",
        color: "#0FA44A",
        data: [
          {
            label: "25-200",
            value: 85,
          },
          {
            label: "25-35",
            value: 60,
          },
          {
            label: "35-55",
            value: 40,
          },
          {
            label: "55+",
            value: 20,
          },
        ],
      },
      {
        seriesname: "Others",
        color: "#FFF854",
        data: [
          {
            label: "16-25",
            value: 30,
          },
          {
            label: "25-35",
            value: 20,
          },
          {
            label: "35-55",
            value: 10,
          },
          {
            label: "55+",
            value: 5,
          },
        ],
      },
    ],
  },
};

export const StackedBarChart = ({ label }: { label: string }) => {
  return (
    <VStack w="full" align={"flex-start"} spacing={"32px"}>
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