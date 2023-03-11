import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './routes/Login';
import ConfirmPage from './routes/confirmPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/confirm/:token" element={<ConfirmPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
