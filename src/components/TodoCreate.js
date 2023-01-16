import { Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';

function TodoCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        color="secondary"
        value={title}
        onChange={handleChange}
        fullWidth
        label="Add a Todo"
        margin="dense"
        id="fullWidth "
      />
      <Button variant="contained" color="primary" endIcon={<AddCircleIcon />}>
        Add
      </Button>
    </form>
  );
}
export default TodoCreate;
