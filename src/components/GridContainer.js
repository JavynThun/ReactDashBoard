import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from '../data/appData';
import { Sparkline } from '@progress/kendo-react-charts';

const SparkLineChartCell = (props) => <td><Sparkline data={props.dataItem.PriceHistory}/></td>

const processData = (data) => {
    data.forEach((item) => {
      item.PriceHistory = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
      return item;
    })
    return data;
  }

export const GridContainer = () => (

  <div>
    <Grid style={{ height: '300px' }} data={processData(gridData)}>
      <Column field="TransactionID" title="ID" width="40px" />
      <Column field="AccountName" title="Account Name" width="140px" />
      {/* <Column field="Category.CategoryName" title="Category Name" width="80px" /> */}
      <Column field="Amount" title="Amount" width="100px" />
      <Column field="Action" title="Withdraw/Deposit" width="170px" />
      {/* <Column field="PriceHistory" width="130px" cell={SparkLineChartCell} title="Price history" /> */}
      <Column field="TransactionDate" title="Date" width="300px"/>
      {/* <Column field="Discontinued" width="130px"
        cell={(props) => (
          <td>
            <input className="k-checkbox" type="checkbox" disabled defaultChecked={props.dataItem[props.field]} />
            <label className="k-checkbox-label"></label>
          </td>
        )} /> */}
    </Grid>
  </div>
);