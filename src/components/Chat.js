import React, { useContext, useEffect, useState } from "react";
import { Avatar, ChatEngine } from "react-chat-engine";
import { useHistory } from "react-router";
import { auth } from "./firebase";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

require("dotenv").config();
console.log(process.env.REACT_APP_CHAT_ENGINE_ID);
// import await from 'await'
const Chat = () => {
  // const [loginuser, setLoginUser] = useContext(UserLoginContext);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { user } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      history.push("/");

      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loading) return "Loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab"></div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        // height="calc(100vh-66px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chat;

///////////////////////////////////

// import React, { useContext, useEffect, useState } from "react";
// import { Avatar, ChatEngine } from "react-chat-engine";
// import { useHistory } from "react-router";
// import { auth } from "./firebase";
// import { useAuth } from "../context/AuthContext";
// import axios from "axios";
// import { UserLoginContext } from "../App";
// // import await from 'await'
// const Chat = () => {
//   const [loginuser, setLoginUser] = useContext(UserLoginContext);
//   const [loading, setLoading] = useState(true);
//   const history = useHistory();
//   // const { user } = useAuth();
//   // console.log(user);

//   const handleLogout = async () => {
//     await auth.signOut();
//     history.push("/");
//   };
//   const getFile = async (url) => {
//     const response = await fetch(url);
//     const data = await response.blob();

//     return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
//   };
//   useEffect(() => {
//     if (!loginuser) {
//       history.push("/");

//       return;
//     }
//     axios
//       .get("https://api.chatengine.io/users/me", {
//         headers: {
//           "project-id": " 33c60e0e-47e2-44ee-9009-04baab50c6bd",
//           "user-name": loginuser.email,
//           "user-secret": loginuser.uid,
//         },
//       })
//       .then(() => {
//         setLoading(false);
//       })
//       .catch(() => {
//         let formdata = new FormData();
//         formdata.append("email", loginuser.email);
//         formdata.append("username", loginuser.displayName);
//         formdata.append("secret", loginuser.uid);

//         getFile(loginuser.photoURL).then((avatar) => {
//           formdata.append("avatar", avatar, avatar.name);

//           axios
//             .post("https://api.chatengine.io/users", formdata, {
//               headers: {
//                 "private-key": "5f00af74-c778-4e57-b12e-0b819056c4a5",
//               },
//             })
//             .then(() => setLoading(false))
//             .catch((error) => console.log(error));
//         });
//       });
//   }, [loginuser, history]);

//   // if (!loginuser || loading) return "Loading...";

//   return (
//     <div className="chats-page">
//       <div className="nav-bar">
//         <div className="logo-tab"></div>
//         <div onClick={handleLogout} className="logout-tab">
//           Logout
//         </div>
//       </div>
//       <ChatEngine
//         height="calc(100vh-66px)"
//         projectID="
//         33c60e0e-47e2-44ee-9009-04baab50c6bd"
//         userName={loginuser.email}
//         userSecret={loginuser.uid}
//       />
//     </div>
//   );
// };

// export default Chat;
