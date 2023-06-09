import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Main from './Main/Main';
import './App.css';

function App() {
  const isLogin = false;
  return (
    <Router>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/" render={() => (isLogin ? <Redirect to="/Main" /> : <Login />)} />
      {/* <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
      /> */}
    </Routes>
    </Router>
  );
}

export default App;
