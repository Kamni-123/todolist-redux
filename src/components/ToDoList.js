import * as React from 'react';
import { useSelector } from 'react-redux';

import List from '@mui/material/List';

import ToDoItem from './ToDoItem';


const App = () => {
  const list = useSelector((state) => state.list);

  return (
    
      <List >
        {list.map((x, index) => (
          <ToDoItem  key={index} {...x} i={index}></ToDoItem>
        ))}
      </List>
   
  );
};

export default App;

