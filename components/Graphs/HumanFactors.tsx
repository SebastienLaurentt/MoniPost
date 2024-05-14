'use client'

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Causes", "Percentage"],
  ["Humans", 90],
  ["Other", 10],
];

export const options = {
  title: "Causes of road accidents",
};

export function HumansFactors() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
