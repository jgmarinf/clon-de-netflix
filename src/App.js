import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';



function App() {
  const user = useSelector(selectUser);
  const classes = useStyle ();
  const dispatch= useDispatch();

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        dispatch(logout)
      }
    })
    return unsubscribe;
  }, [dispatch])
  
  return (
    <div className = {classes.root} >
      <Router>
           {
             !user ? (<Login/>) : (
              <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/profile">
                <Profile/>
              </Route>
              <Route path="/checkout">
                <Paypal/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
             )
           }
      </Router>
    </div>
  );
}
const useStyle = makeStyles((theme) => ({
  root : {
    minHeight: "100vh",
    backgroundColor: "#141414"
  },
}));

export default App;
