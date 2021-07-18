import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Chat from "./components/Chat";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

// export const UserLoginContext = createContext();
function App() {
  // const [loginuser, setLoginUser] = useState({});
  return (
    <div>
      {/* <UserLoginContext.Provider value={[loginuser, setLoginUser]}> */}
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              {/* <Home></Home> */}
              <Login></Login>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/chats">
              <Chat></Chat>
            </PrivateRoute> */}
            <Route path="/chats">
              <Chat></Chat>
            </Route>
            {/* <Route path="/login">
              <Login></Login>
            </Route> */}
          </Switch>
        </AuthProvider>
      </Router>
      {/* </UserLoginContext.Provider> */}
    </div>
  );
}

export default App;
