import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  
  // Early Return 
  if(!isMenuOpen) return null;

  return (
    <div className="p-7 shadow-lg w-48">
      <ul>
        <li className="font-bold">Home</li>
        <li>Shorts</li>
        <li>subscriptions</li>
      </ul>

      <h1 className="font-bold pt-7">You</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>

      <h1 className="font-bold pt-7">Explore</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch later</li>
        <li>Liked video</li>
      </ul>
      <h1 className="font-semibold pt-7">Settings</h1>
      <h1 className="font-semibold ">Report history</h1>
      <h1 className="font-semibold ">Help</h1>
      <h1 className="font-semibold ">Send feedback</h1>
    </div>
  );
};

export default Sidebar;
