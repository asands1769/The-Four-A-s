import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './users/Login'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/users/Login" element={<Login/>}></Route>
        </Routes>
      </Router>
      <Header />
      <Login />
    </div>
  );
}

export default App;
