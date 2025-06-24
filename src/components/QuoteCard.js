import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const quotes = [
  "Push harder than yesterday!",
  "Every step counts.",
  "Your body can stand almost anything.",
  "Don’t limit your challenges. Challenge your limits."
];

const QuoteCard = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="body1" align="center" fontStyle="italic">
          "{quote}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
