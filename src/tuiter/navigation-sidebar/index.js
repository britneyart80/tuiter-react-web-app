import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavigationSidebar = () => {
  const [active, setActive] = useState("explore");

  return (
    <div className="list-group wd-nav-sidebar">
      <Link to="/tuiter" className="list-group-item">
        Tuiter
      </Link>
      <Link
        to="/tuiter/home"
        onClick={() => setActive("home")}
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        Explore
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        Notifications
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        Messages
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        Bookmarks
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        Lists
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        Profile
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        More
      </Link>
    </div>
  );
};
export default NavigationSidebar;
