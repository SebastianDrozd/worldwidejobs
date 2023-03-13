import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ConfirmPage from './routes/confirmPage';
import RegisterUser from './routes/registerUser';
import Login from './routes/login';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './utils/requests';
import { setLoggedIn } from './redux/slices/userSlice';
import { useEffect, useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [finishedLoading, setFinishedLoading] = useState(false)
  
  useEffect(() => {
    if(user.token){
      const decode = JSON.parse(atob(user.token.split('.')[1]));
      if(new Date() < new Date(decode.exp * 1000)){
        console.log("this is current date", new Date())
        console.log("this is expiration date", new Date(decode.exp * 1000))
       console.log("token is valid")
      }
      else{
        console.log("token is exprired and needs to be refreshed")
        refreshToken().then(res => {
          console.log(res.data.accessToken)
          dispatch(setLoggedIn({token: res.data.accessToken}))
      })
      }
    }
    else if(!user.token){
      console.log("user is not logged in")
      refreshToken().then(res => {
        console.log("successfully refreshed token", res.data.accessToken)
        dispatch(setLoggedIn({token: res.data.accessToken}))
    })
    }
  },[])

  

 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterUser/>}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/confirm/:token" element={<ConfirmPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
