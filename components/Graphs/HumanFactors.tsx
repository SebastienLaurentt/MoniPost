"use client";

import { Box, Stack, colors } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Humans", value: 90, color: '#16a34a'},
  { label: "Others", value: 10, color: '#18181b' },

];

export default function HumansFactors() {
  return (
    <Stack direction="row" width="100%" textAlign="center">
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
          width={400}
          height={200}

        />
      </Box>
    </Stack>
  );
}
