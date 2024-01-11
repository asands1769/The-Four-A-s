import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './users/Login';
import RegisterUser from './users/Register';
import Profile from './users/Profile';
import Test from './users/Test';

import './App.css';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import Reviews from './components/Reviews';



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
          <Route exact path='/createevent' element={<CreateEvent/>}></Route>
          <Route exact path='/events' element={<Events/>}></Route>
          <Route exact path='/reviews' element={<Reviews/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
