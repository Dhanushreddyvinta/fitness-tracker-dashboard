import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

const NewActivityForm = ({ addActivity }) => {
  const [formData, setFormData] = useState({ date: '', type: '', duration: '', calories: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(formData);
    setFormData({ date: '', type: '', duration: '', calories: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <TextField label="Date" type="date" name="date" onChange={handleChange} value={formData.date} InputLabelProps={{ shrink: true }} />
        <TextField label="Activity Type" name="type" onChange={handleChange} value={formData.type} />
        <TextField label="Duration" name="duration" onChange={handleChange} value={formData.duration} />
        <TextField label="Calories Burned" name="calories" onChange={handleChange} value={formData.calories} />
        <Button variant="contained" type="submit">Add Activity</Button>
      </Stack>
    </form>
  );
};

export default NewActivityForm;