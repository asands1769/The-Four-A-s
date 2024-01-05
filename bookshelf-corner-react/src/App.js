import logo from './logo.svg';
import './App.css';
import BookListComponent from './components/BookListComponent';
//import { Route, Router } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    // <div className="container">
    //  <BookListComponent/>
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
