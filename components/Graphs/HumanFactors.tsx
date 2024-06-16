"use client";

import { Box, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Humans", value: 90, color: "#064e3b" },
  { label: "Others", value: 10, color: "#18181b" },
];

export default function HumansFactors() {
  return (
    <Stack direction="row" width="100%" textAlign="center" className="h-[200px]" >
      <Box flexGrow={1}>
        <PieChart
          series={[
            {
              data,
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
            },
          ]}

          height={200}
          slotProps={{
            legend: {
              labelStyle: {
                fontSize: 16,
                fill: 'black',
                fontWeight: 600,
                fontFamily: 'Inconsolata, monospace',
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
}
