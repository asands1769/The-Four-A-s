import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './users/Login';
import RegisterUser from './users/Register';
import Profile from './users/Profile';
import Test from './users/Test';

import './App.css';
import BookListComponent from './components/BookListComponent';
//import { Route, Router } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import Event from './components/Event';



function App() {
  return (
    <div>
       
      <Header />
      <Router>
        <Routes>
          <Route exact path='/bookList' element={<BookListComponent/>}></Route>
          <Route exact path="/users/Login" element={<Login/>}></Route>
          <Route exact path="/users/Register" element={<RegisterUser/>}></Route>
          <Route exact path="/users/Profile" element={<Profile/>}></Route>
          <Route exact path="/users/Test" element={<Test/>}></Route>
          <Route exact path='/events' element={<Event/>}></Route>

        </Routes>
      </Router>
    </div>
    
    
  );
}


export default App;