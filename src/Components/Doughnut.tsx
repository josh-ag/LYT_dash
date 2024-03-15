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
  width: "100%",
  height: "140",
  dataFormat: "json",
  theme: "fusion",
  numberSuffix: "%",
  pieRadius: 50,
  doughnutRadius: 40,
  enableSmartLabels: false,
  showPercentValues: false,
  labelDistance: -10,
  baseFontSize: "12px",
  baseFontWeight: "500",
  baseFont: "Aeonik",
  baseFontColor: "#131313",
  showLabels: false,
  showLegend: false,
};

export const DoughnutChart = ({ label }: { label: string }) => {
  return (
    <VStack h="full" justify={"center"} align={"flex-start"} spacing={"32px"}>
      <Text
        fontSize={"16px"}
        fontWeight={"400"}
        lineHeight={"19.2px"}
        color={"#131313"}
        ml={"32px"}
      >
        {label}
      </Text>
      <Box w="250px">
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
