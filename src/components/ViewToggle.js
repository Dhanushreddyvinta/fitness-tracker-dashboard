import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

const ViewToggle = ({ view, setView }) => (
  <ToggleButtonGroup
    value={view}
    exclusive
    onChange={(e, newView) => newView && setView(newView)}
    sx={{ my: 2 }}
  >
    <ToggleButton value="daily">Daily</ToggleButton>
    <ToggleButton value="weekly">Weekly</ToggleButton>
    <ToggleButton value="monthly">Monthly</ToggleButton>
  </ToggleButtonGroup>
);

export default ViewToggle;
