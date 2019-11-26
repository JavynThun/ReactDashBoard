import React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartCategoryAxis,
    ChartCategoryAxisItem
  } from '@progress/kendo-react-charts';

  import { lineChartData, lineChart7Months } from '../data/appData';
  const labelTemplate = (e) => (e.category + '\n');
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
//   export const LineChartContainer = () => (
//     <Chart>
//       <ChartTitle text="Units sold" />
//       <ChartCategoryAxis>
//         <ChartCategoryAxisItem title={{ text: 'Months'}} categories={categories} />
//       </ChartCategoryAxis>
//       <ChartSeries>
//         <ChartSeriesItem type="line" data={[123, 276, 310, 212, 240, 156, 98]} />
//         <ChartSeriesItem type="line" data={[165, 210, 287, 144, 190, 167, 212]} />
//         <ChartSeriesItem type="line" data={[56, 140, 195, 46, 123, 78, 95]} />
//       </ChartSeries>
//     </Chart>
//   );
  export const LineChartContainer = () => (
    <Chart>
      <ChartTitle text="Balance over time" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem title={{ text: 'Account type'}} categories={lineChart7Months} />
      </ChartCategoryAxis>
      <ChartSeries>
      {
        lineChartData.map((item, idx) => (
          <ChartSeriesItem key={idx} type="line" data={item.data} name={item.name} gap={2}/>
        ))}
        {/* <ChartSeriesItem type="line" data={lineChartData} /> */}
      </ChartSeries>
    </Chart>
  );