import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Login from "./Login/login";
import Register from "./Login/Register";
import Layout from "./header/Layout";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <Router>
      <div
        className="bg-white bg-cover bg-center min-h-screen flex flex-col"
        style={{
          backgroundImage:
            'url("https://kpmg.com/content/dam/kpmg/bm/images/2022/10/time-management-and-working-productivity.png")',
        }}
      >
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Layout />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




