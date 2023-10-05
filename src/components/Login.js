// Login.js

import React, { useState,useEffect } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

  import "./login.css";
  import { useNavigate } from 'react-router-dom';
  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [userPosition, setUserPosition] = useState(null);
  const navigate = useNavigate();


  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in   
        const user = userCredential.user;
        console.log("Logged in user:", user);
        // navigator.geolocation.getCurrentPosition(
        //   function (position) {
        //     console.log("Latitude is :", position.coords.latitude);
        //     console.log("Longitude is :", position.coords.longitude);
        //     const temp = {
        //       lat : position.coords.latitude , 
        //       lng : position.coords.longitude
        //     };
        //     setUserPosition(temp);
        //   },
        //   function (error) {
        //     console.error("Error getting user's position:", error);
        //   }
        // );
        navigate('/welcome');
      })
      .catch((error) => {
        // Handle login errors
        console.error("Login error:", error);
      });
  };

  const goToSignUp = (e) => {
    navigate('/register');
  }



  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>




          <button className="bar"  onClick={signIn}>Sign in</button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <button className="bar"  onClick={goToSignUp}>Sign up</button>

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
};

export default Login;
