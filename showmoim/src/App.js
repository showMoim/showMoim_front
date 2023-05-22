import logo from './logo.svg';
import { Route, Routes, Redirect} from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      {/* <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
      /> */}
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
