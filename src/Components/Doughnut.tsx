import { Box, Text, VStack } from "@chakra-ui/react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
ReactFC.fcRoot(FusionCharts, Charts);

// Chart data
const chartData = [
  {
    label: "Male",
    value: 35,
    color: "#283350",
  },
  {
    label: "Female",
    value: 55,
    color: "#0FA44A",
  },

  {
    label: "Others",
    value: 15,
    color: "#FFF854",
    showValue: true,
  },
];

// Chart configuration
const chartConfig = {
  type: "doughnut2d",
  width: "240",
  height: "240",
  dataFormat: "json",
  theme: "fusion",
  pieRadius: 50,
  doughnutRadius: 40,
  enableSmartLabels: false,
  labelDistance: -10,
  // Chart Configuration
  baseFontSize: "12px",
  baseFontWeight: "500",
  baseFont: "Aeonik",
  baseFontColor: "#131313",
  showPercentValues: "1",
  showLabels: false,
  showLegend: false,
  showLegendPercentValue: false,
};

export const DoughnutChart = ({ label }: { label: string }) => {
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
        <ReactFC
          {...chartConfig}
          dataSource={{
            chart: chartConfig,
            data: chartData,
          }}
        />
      </Box>
    </VStack>
  );
};
