import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Main from './Main/Main';
import './App.css';
import AuthProvider from './Context/AuthContext';

function App() {
  const isLogin = false;

  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/" render={() => (isLogin ? <Navigate to="/Main" /> : <Navigate to="/Login" />)} />
        {/* <Route
            path="/login"
            render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        /> */}
      </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
