import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyD9I3Y90q6rWsdnbMpQyaNA33vcRiP1VnI",
  authDomain: "test-darly-auth-react.firebaseapp.com",
  databaseURL: "https://test-darly-auth-react-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-darly-auth-react",
  storageBucket: "test-darly-auth-react.appspot.com",
  messagingSenderId: "659989739444",
  appId: "1:659989739444:web:11703fbe46214fb7eba4e1"

};

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/"><Userslogin /></Route>
            <Route path="/reguser"><Usersregister /></Route>
            <Route path="/page"><Page /></Route>
          </Switch>
        </Router>
      </header>
    </div >
  );

  function Userslogin() {
    return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <h3>Sign up</h3>
          <TextField id="loginemail" label="Enter you email:" />
          <TextField id="loginpass" label="Enter you pass:" />
        </form>
        <div className="WrapperButton">
          <Button
            variant="contained"
            color="primary"
            onClick={loginForm}>
            Log in
        </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={logoutForm}>
            Log out
        </Button>
          <p>or</p>
          <Link to="/reguser">Registration</Link>
        </div>

      </div>
    )
  }
  function Usersregister() {
    return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <h3>Registration</h3>
          <TextField id="registeremail" label="Enter you email:" />
          <TextField id="registerpass" label="Enter you pass:" />
        </form>
        <div className="WrapperButton">
          <Button
            variant="contained"
            color="primary"
            onClick={regForm}>
            Check in
          </Button>
          <p>or</p>
          <Link to="/">Sign up</Link>
        </div>

      </div>
    );
  }

  function Page() {
    return (
      <div className="WrapperPage">
        <p>0</p>
      </div>
    )
  }

  function regForm() {
    let email = document.querySelector('#registeremail').value
    let password = document.querySelector('#registerpass').value
    firebase.auth().signOut()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        window.location.pathname = "/page";
      })
  }

  function loginForm() {
    let email = document.querySelector('#loginemail').value
    let password = document.querySelector('#loginpass').value
    firebase.auth().signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        window.location.pathname = "/page";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Wrong ${errorCode} ${errorMessage}`)
      });
    document.querySelector('form').reset();
  }

  function logoutForm() {
    firebase.auth().signOut().then(() => {
      console.log('Sign-out successful.')
    }).catch((error) => {
      console.log('An error happened.')
    });
  }

}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    if (document.querySelector('.WrapperPage')) {
      document.querySelector('.WrapperPage').innerHTML = '<p>Welcome to My Awesome App</p>'
    }
  } else {
    if (document.querySelector('.WrapperPage')) {
      document.querySelector('.WrapperPage').innerHTML = '<p>0</p>'
    }
  }
});


export default App;

