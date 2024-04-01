// import { Routes, Route } from "react-router-dom";
// import Login from './Login/login';
// import Register from '../src/Login/Register';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="bg-white bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: 'url("https://wallpapers.com/images/hd/cute-desktop-organizer-october-to-do-list-7b0rwkvxpvavpcaw.jpg")' }}>
     <Header/>
     <ToDoList/>
     {/* <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
     </Routes> */}
    </div>
  );
} 

export default App;



