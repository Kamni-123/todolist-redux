import { styled } from '@mui/material/styles';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: 'url("https://wallpapers.com/images/hd/cute-desktop-organizer-october-to-do-list-7b0rwkvxpvavpcaw.jpg")',
  backgroundSize: 'container',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire page height
  display: 'flex',
  flexDirection: 'column',
}));

function App() {
  return (
    
      
        <>
        <Demo>
        <Header></Header>
        
        <ToDoList></ToDoList>
        </Demo>

        
        
        
        </>

      
    
  );
}

export default App;

