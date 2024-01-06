import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './users/Login';
import RegisterUser from './users/Register';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/users/Login" element={<Login/>}></Route>
          <Route exact path="/users/Register" element={<RegisterUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
