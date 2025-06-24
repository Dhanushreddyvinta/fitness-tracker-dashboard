import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const ActivityLogTable = ({ logs }) => (
  <Paper sx={{ overflowX: 'auto', mt: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Activity</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Calories</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {logs.map((log, index) => (
          <TableRow key={index}>
            <TableCell>{log.date}</TableCell>
            <TableCell>{log.type}</TableCell>
            <TableCell>{log.duration}</TableCell>
            <TableCell>{log.calories}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default ActivityLogTable;