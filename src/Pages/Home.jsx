import React from "react";
import './Assets/Styles.css';
import Login from './Login';
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function Home() {

  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/Dashboard" />;
  }
  window.history.pushState({}, null, "/");

  return (<>
    <div className="background"/>
    <div className="home">
      <h1>
      Notes App by&nbsp;
      <a href="https://github.com/santizabe" target="blank">
        santizabe
      </a>
      </h1>
    </div>

    <div className="loginBg" />
    <div className='login'>
      <Login />
    </div>
  </>
  );
}

export default Home;
