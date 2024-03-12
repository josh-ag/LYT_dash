// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { Box } from "@chakra-ui/react";
//Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Preparing the chart data
const chartData = [
  {
    label: "Mon",
    value: "30",
    color: "#0FA44A",
    alpha: "10",
    hoverAlpha: "40",
  },
  {
    label: "Tue",
    value: "20",
    color: "#0FA44A",
    alpha: "10",
    hoverAlpha: "40",
  },
  {
    label: "Wed",
    value: "65",
    color: "#0FA44A",
    alpha: "10",
    hoverAlpha: "40",
  },
  {
    label: "Thur",
    value: "45",
    baseFontSize: "18",

    color: "#0FA44A",
    alpha: "10",
    hoverAlpha: "40",
  },
  {
    label: "Fri",
    value: "95",
    color: "#0FA44A",
    alpha: "10",
    hoverAlpha: "40",
  },
  {
    label: "Sat",
    value: "55",
    color: "#0FA44A",
    alpha: "10",
    hoverAlpha: "40",
  },
  {
    label: "Sun",
    value: "80",
    color: "#0FA44A",
    hoverAlpha: "40",
    alpha: "10",
  },
];

// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "100%", // Width of the chart
  height: "369", // Height of the chart
  dataFormat: "json", // Data type

  dataSource: {
    // Chart Configuration

    chart: {
      baseFontSize: "20px",
      baseFontColor: "#6A6A6A",
      baseFontWeight: "400",
      divLineDashed: true,
      divLineDashGap: 6,
      divDashLen: 50,
      divLineColor: "#8F8F8F",
      drawCrossLine: false,
      theme: "fusion", //Set the theme for your chart
    },
    // Chart Data
    data: chartData,
  },
};

export const BarChart = () => {
  return (
    <Box w="full" bg="#fff" rounded={"4px"} px={"32px"} py={"23px"}>
      <ReactFC {...chartConfigs} />
    </Box>
  );
};
