import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './users/Login';
import RegisterUser from './users/Register';
import Profile from './users/Profile';
import Test from './users/Test';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/users/Login" element={<Login/>}></Route>
          <Route exact path="/users/Register" element={<RegisterUser/>}></Route>
          <Route exact path="/users/Profile" element={<Profile/>}></Route>
          <Route exact path="/users/Test" element={<Test/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
