import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './users/Login';
import RegisterUser from './users/Register';
import Profile from './users/Profile';
import Test from './users/Test';

import './App.css';
import BookListComponent from './components/BookListComponent';
import WishListComponent from './components/WishListComponent';
import AddBookListComponent from './components/AddBookListComponent';
import ViewBookList from './components/ViewBookList';
import Event from './components/Event';

function App() {
  return (
    <div>
       
      <Header />
      <Router>
        <Routes>
          <Route exact path='/bookList' element={<BookListComponent/>}></Route>
          <Route exact path='/wishList' element={<WishListComponent/>}></Route>
           <Route exact path='/addBookList' element={<AddBookListComponent/>}></Route>
           <Route exact path='/viewBookList' element={<ViewBookList/>}></Route>
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