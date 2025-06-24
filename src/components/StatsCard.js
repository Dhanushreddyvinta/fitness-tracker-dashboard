import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatsCard = ({ title, value }) => (
  <Card sx={{ minWidth: 150, margin: 1 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h5" color="primary">{value}</Typography>
    </CardContent>
  </Card>
);

export default StatsCard;
