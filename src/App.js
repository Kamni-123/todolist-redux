import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Login from './Login/login';
import Register from './Login/Register';
import Layout from './header/Layout';

function App() {
  return (
    <Router>
      <div className="bg-white bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: 'url("https://kpmg.com/content/dam/kpmg/bm/images/2022/10/time-management-and-working-productivity.png")' }}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<ToDoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




