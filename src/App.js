import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Contacts from "./components/contacts/Contacts";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import { loadUser } from "./store/actions/authActions";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Container maxWidth="md">
          <NavBar />
          <Container className={classes.contentStyle} maxWidth="sm">
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Contacts} />
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
