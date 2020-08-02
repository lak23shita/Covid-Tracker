import React ,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api';
import { Line,Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';
function Chart({data:{confirmed,recovered, deaths},country}) {
    const [dailyData , setDailyData] =useState({});

    
  useEffect(() => {
    const fetchMyAPI = async () => {
        setDailyData(await fetchDailyData()) ;

    
    };

    fetchMyAPI(); //calling the function
    //re render when there is a empty string
  },[]);

   const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value,recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData.length 
    ? (
      <Line
        data={{
            //in this we are destructuring the dates and then assigning that date to a date
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({confirmed}) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            //this will fill the space below the chart
            fill: true,
          }, {
            data: dailyData.map(({deaths}) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }],
        }}
      />) : null
  );

  return (
    <div className={styles.container}>
      {country? barChart : lineChart}
    </div>
  );
};
export default Chart
