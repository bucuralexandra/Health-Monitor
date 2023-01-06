import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

function Chart(props) {
  const [data] = useState({
    labels: ['Body Temperature (°C)', 'Pulse rate (bpm)', 'Breathing rate (breaths pm)','Systolic Pressure (mmHg)', 'Diastolic Pressure (mmHg)', 'Blood Glucose (mmol/L)'],
    datasets: props.datasets
  });

  return (
    <div>
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default Chart;