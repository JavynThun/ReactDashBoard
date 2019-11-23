import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import { donutChartData } from '../data/appData';

const donutCenterRenderer = () => (<span><h3>Accounts</h3> </span>);
/* This function's outputted string determines the label contents */
const labelTemplate = (e) => (e.category + '\n'  + (e.percentage*100) +'%');

export const DonutChartContainer = () => (
  <Chart style={{height:300}} donutCenterRender={donutCenterRenderer}>
    <ChartSeries>
      <ChartSeriesItem type="donut" data={donutChartData} categoryField="accountType" field="percent" padding={0} startAngle = {200}>
        <ChartSeriesLabels color="#fff" background="none" content={labelTemplate} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);