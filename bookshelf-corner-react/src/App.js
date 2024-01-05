import Header from './components/Header';
import AddUser from './users/Register';
import Login from './users/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<BookListComponent/>}></Route>
        </Routes>
      </Router>
      <Header />
      <Login />
    </div>
  );
}

export default App;
