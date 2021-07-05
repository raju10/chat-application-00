import React, { useContext, useState } from "react";

import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebase.config";
import { auth } from "./firebase";

/////////////////
//firebase.initializeApp(firebaseConfig);
////////////////
const Login = () => {
  //   const [loginUser, setLoginUser] = useContext(UserContext);
  //   console.log(loginUser);
  //   const history = useHistory();
  //   const location = useLocation();
  //   const { from } = location.state || { from: { pathname: "/" } };
  //   const handelGoogleSignIn = () => {
  //     const googleProvider = new firebase.auth.GoogleAuthProvider();

  //     firebase
  //       .auth()
  //       .signInWithPopup(googleProvider)
  //       .then((result) => {
  //         const user = result.user;

  //         const signInUser = {
  //           loginUserEmail: user.email,
  //           loginUserName: user.displayName,
  //           loginUserPhoto: user.photoURL,
  //         };
  //         setLoginUser(signInUser);
  //         history.replace(from);
  //       })
  //       .catch((error) => {
  //         var errorCode = error.code;
  //         var errorMessage = error.message;

  //         var email = error.email;

  //         var credential = error.credential;
  //         console.log(errorCode, errorMessage);
  //       });
  //   };
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unichat !!</h2>

        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined style={{ fontSize: "17px", paddingRight: "5px" }} />{" "}
          Sign in With Google
        </div>

        <br />
        <br />
        <div className="login-button facebook">
          <FacebookOutlined style={{ fontSize: "17px", paddingRight: "5px" }} />{" "}
          Sign in With Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;

////////////////////////

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
// import firebase from "firebase/app";
// import "firebase/auth";

// import { useHistory, useLocation } from "react-router";
// import googleImg from "../Images/images.png";
// // import "./Login.css";
// import firebaseConfig from "./firebase.config";
// import { UserLoginContext } from "../App";
// firebase.initializeApp(firebaseConfig);
// const Login = () => {
//   const [loginuser, setLoginUser] = useContext(UserLoginContext);
//   console.log(loginuser.email);
//   const history = useHistory();
//   const location = useLocation();
//   const { from } = location.state || { from: { pathname: "/" } };
//   //////////////////////
//   const googleProvider = new firebase.auth.GoogleAuthProvider();
//   const handelGoogleSignIn = () => {
//     firebase
//       .auth()
//       .signInWithPopup(googleProvider)
//       .then((result) => {
//         const user = result.user;
//         // const signInUser = {
//         //   loginUserName: user.displayName,
//         //   loginUserEmail: user.email,
//         //   loginUserPhoto: user.photoURL,
//         //   loginUserPhoneNumber: user.phoneNumber,
//         //   loginUserUID: user.uid,
//         // };
//         setLoginUser(user);
//         history.replace(from);
//         console.log(user.email);
//         // var credential = result.credential;
//         // var token = credential.accessToken;
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         var email = error.email;

//         var credential = error.credential;
//         console.log(errorMessage);
//       });
//   };
//   return (
//     <div id="login-page">
//       <div id="login-card">
//         <h2>Welcome to Unichat !!</h2>

//         <div className="login-button google" onClick={handelGoogleSignIn}>
//           <GoogleOutlined style={{ fontSize: "17px", paddingRight: "5px" }} />{" "}
//           Sign in With Google
//         </div>
//         <br />
//         <br />
//         <div className="login-button facebook">
//           <FacebookOutlined style={{ fontSize: "17px", paddingRight: "5px" }} />{" "}
//           Sign in With Facebook
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
