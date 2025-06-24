import React, { useState } from 'react';
import { Grid, Container } from '@mui/material';
import StatsCard from '../components/StatsCard';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import GoalDoughnut from '../components/GoalDoughnut';
import ActivityLogTable from '../components/ActivityLogTable';
import ViewToggle from '../components/ViewToggle';
import NewActivityForm from '../components/NewActivityForm';
import QuoteCard from '../components/QuoteCard';

import { statsData, lineChartData, barChartData, doughnutChartData, activityLogs } from '../data/dummyData';

const Dashboard = () => {
  const [view, setView] = useState('weekly');
  const [activities, setActivities] = useState(activityLogs);

  const addActivity = (newActivity) => setActivities([...activities, newActivity]);

  return (
    <Container sx={{ my: 3 }}>
      <ViewToggle view={view} setView={setView} />

      <Grid container spacing={2}>
        <Grid item xs={6} md={3}><StatsCard title="Calories" value={`${statsData.calories} kcal`} /></Grid>
        <Grid item xs={6} md={3}><StatsCard title="Steps" value={statsData.steps} /></Grid>
        <Grid item xs={6} md={3}><StatsCard title="Workout" value={statsData.workout} /></Grid>
        <Grid item xs={6} md={3}><StatsCard title="Goal" value={statsData.goal} /></Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}><LineChart data={lineChartData} /></Grid>
        <Grid item xs={12} md={6}><BarChart data={barChartData} /></Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}><GoalDoughnut data={doughnutChartData} /></Grid>
        <Grid item xs={12} md={6}><ActivityLogTable logs={activities} /></Grid>
      </Grid>

      <NewActivityForm addActivity={addActivity} />
      <QuoteCard />
    </Container>
  );
};

export default Dashboard;