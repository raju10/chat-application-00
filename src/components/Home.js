import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/chats">
        <button>Chat me</button>
      </Link>
    </div>
  );
};

export default Home;
