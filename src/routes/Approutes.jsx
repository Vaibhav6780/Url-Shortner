import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Getstarted from '../pages/Getstarted/Getstarted';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProtectedRoute from '../components/Protectedroute/ProtectedRoute';

function Approutes() {

  return (

    <Routes>

      <Route path="/" element={<Getstarted />} />
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />

        </ProtectedRoute>
      }
      />
      <Route path="/home" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
      />
    </Routes>

  );
}

export default Approutes;