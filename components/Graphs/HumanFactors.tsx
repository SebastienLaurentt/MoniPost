"use client";

import { Box, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Humans", value: 90, color: "#16a34a" },
  { label: "Others", value: 10, color: "#18181b" },
];

export default function HumansFactors() {
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} width="100%" textAlign="center">
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
          width={350}
          height={200}
          slotProps={{
            legend: {
              labelStyle: {
                fontSize: 16,
                fill: 'white',
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
}
