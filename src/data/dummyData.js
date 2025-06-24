export const statsData = {
  calories: 2200,
  steps: 7500,
  workout: "45 min",
  goal: "Lose 2 kg"
};

export const lineChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Workout Duration (min)',
    data: [30, 45, 50, 40, 60, 35, 50],
    borderColor: 'rgba(75,192,192,1)',
    backgroundColor: 'rgba(75,192,192,0.2)',
  }]
};

export const barChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Steps',
    data: [7000, 8000, 7500, 9000, 10000, 9500, 8700],
    backgroundColor: 'rgba(255,99,132,0.6)',
  }]
};

export const doughnutChartData = {
  labels: ['Completed', 'Remaining'],
  datasets: [{
    data: [60, 40],
    backgroundColor: ['#36A2EB', '#FFCE56'],
  }]
};

export const activityLogs = [
  { date: '2025-06-18', type: 'Running', duration: '30 min', calories: 300 },
  { date: '2025-06-19', type: 'Cycling', duration: '45 min', calories: 400 },
  { date: '2025-06-20', type: 'Yoga', duration: '60 min', calories: 250 },
];