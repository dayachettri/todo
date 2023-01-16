import { Container } from '@mui/material';
import { useState } from 'react';
import TodoAppBar from './components/TodoAppBar';
import TodoCreate from './components/TodoCreate';
function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);
  const todoCreate = (title) => {
    const updatedTodos = [
      ...todos,
      {
        id: Math.round(Math.random() * 999),
        title,
      },
    ];

    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoAppBar />
      <Container maxWidth="sm">
        <TodoCreate onCreate={todoCreate} />
      </Container>
    </div>
  );
}

export default App;
