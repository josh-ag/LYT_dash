import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Text, VStack } from "@chakra-ui/react";

export const DoughnutChart = ({ label }: { label: string }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      chart: {
        type: "pie",
        width: "100%",
      },
      title: { text: "" },
      legend: {
        enabled: false,
      },

      colors: ["#283350", "#0FA44A", "#FFF854"],
      plotOptions: {
        series: {
          borderWidth: 0,
          colorByPoint: true,
          type: "pie",
          size: "70%",
          innerSize: "80%",

          dataLabels: {
            enabled: true,
            format:
              '<span style="font-family:Aeonik;font-size:12px;color:#131313;font-weight:500;line-height:14.4px;">{point.y} % </span>',
            distance: 0,
            style: {
              fontFamily: "Aeonik",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "14.4px",
              color: "#131313",
            },
          },
        },
      },
      series: [
        {
          name: "Gender",
          data: [
            ["Male", 35],
            ["Female", 55],
            ["Others", 15],
          ],
        },
      ],
    });
  }, []);

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
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Box>
    </VStack>
  );
};
