import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OpenRoute from './components/OpenRoute';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import MyProfile from './components/MyProfile';
import Settings from './components/Settings';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings  />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
