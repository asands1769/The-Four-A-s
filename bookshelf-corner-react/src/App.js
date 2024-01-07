import Header from './components/Header';
import './App.css';
import Event from './components/Event';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/events' element={<Event/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
