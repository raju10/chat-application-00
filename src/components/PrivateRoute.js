// import React, { useContext } from "react";
// import { Redirect, Route } from "react-router";
// import { UserContext } from "../App";

// const PrivateRoute = ({ children, ...rest }) => {
//   const [loginUser, setLoginUser] = useContext(UserContext);
//   return (
//     <div>
//       <Route
//         {...rest}
//         render={({ location }) =>
//           loginUser.loginUserEmail ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location },
//               }}
//             />
//           )
//         }
//       />
//     </div>
//   );
// };

// export default PrivateRoute;

/////////////////

// import React, { useContext } from "react";
// import { Redirect, Route } from "react-router";
// import { UserLoginContext } from "../App";

// const PrivateRoute = ({ children, ...rest }) => {
//   const [loginUser, setLoginUser] = useContext(UserLoginContext);
//   return (
//     <div>
//       <Route
//         {...rest}
//         render={({ location }) =>
//           loginUser.email ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location },
//               }}
//             />
//           )
//         }
//       />
//     </div>
//   );
// };

// export default PrivateRoute;
