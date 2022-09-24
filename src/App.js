import React from 'react';
import Todo from './components/Todo';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='ben'/>
      <br></br>
      <Todo text='Success' />
      <br></br>
      <Todo text='Declined' />

    </div>
  );
}

export default App;
