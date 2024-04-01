import { styled } from '@mui/material/styles';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: 'url("https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-2736499.jpg&fm=jpg")',
  backgroundSize: 'container',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire page height
  display: 'flex',
  flexDirection: 'column',
}));

function App() {
  return (
    
      <Demo>
        <>

        <Header></Header>
        
        <ToDoList></ToDoList>
        
        
        </>

      </Demo>
    
  );
}

export default App;

