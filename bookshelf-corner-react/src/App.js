import logo from './logo.svg';
import './App.css';
import BookListComponent from './components/BookListComponent';
//import { Route, Router } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';

function App() {
  return (
    <div>
        <Router>
            <HeaderComponent/>
              <div className="container">  
                  <Routes>
                    <Route exact path='/bookList' element={<BookListComponent/>}></Route>
                  </Routes>
              </div>
            <FooterComponents/>
          
      </Router>  
    </div>
    
    
  );
}

export default App;
