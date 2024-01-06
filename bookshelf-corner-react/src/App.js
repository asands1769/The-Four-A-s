import logo from './logo.svg';
import './App.css';
import BookShelfComponent from './components/BookShelfComponent';
//import { Route, Router } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    // <div className="container">
   //  <BookShelfComponent/>
    // </div>
    <Router>
      <Routes>
        <Route exact path='/bookList' element={<BookListComponent/>}>

        </Route>
      </Routes>
      </Router>
  );
}


export default App;