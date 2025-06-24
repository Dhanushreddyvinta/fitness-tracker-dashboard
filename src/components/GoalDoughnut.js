import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const GoalDoughnut = ({ data }) => <Doughnut data={data} />;

export default GoalDoughnut;