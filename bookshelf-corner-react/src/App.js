import Header from './components/Header';
// import { Navigate } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './users/Login';
import RegisterUser from './users/Register';
import Profile from './users/Profile';
import Test from './users/Test';
import Home from './components/Home';
import PrivateRoute from './users/PrivateRoute';

import './App.css';
import Event from './components/Events.js';
import BookShelf from './components/BookShelf.js';
import TagList from './components/tag';

import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import Reviews from './components/Reviews';
import BookListComponent from './components/BookListComponent';
//import { Route, Router } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';





function App() {
  return (
    <div>
       
      
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path='/bookList' element={<BookListComponent/>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<RegisterUser />}></Route>
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }/>
          <Route exact path="/users/Test" element={<Test/>}></Route>
          <Route exact path='/events' element={<Event/>}></Route>
          <Route exact path='/bookshelf'element={<BookShelf/>}></Route>
          <Route exact path='/tag'element={<TagList/>}></Route>

          <Route exact path='/createevent' element={<CreateEvent/>}></Route>
          <Route exact path='/events' element={<Events/>}></Route>
          <Route exact path='/reviews' element={<Reviews/>}></Route>

        </Routes>
      </Router>
    </div>
    
    
  );
}


export default App;