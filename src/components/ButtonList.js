import React from "react";
import Button from "./Button";

const lists = [
  "All",
  "Coding",
  "Songs",
  "Movie",
  "Cricket",
  "Live",
  "Podcast",
  "Gaming",
  "Programmig",
  "News",
  "Travelling",
  "Hackathon",
  "Meditation",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {lists.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
