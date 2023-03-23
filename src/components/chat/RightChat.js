import React, { useEffect, useState } from "react";

const RightChat = ({ content, timestamp }) => {
  const [date, setDate] = useState();

  const timeHandler = () => {
    const hour = new Date(timestamp).getHours();
    const minute = new Date(timestamp).getMinutes();
    setDate(`${hour}:${minute}`);
  };

  useEffect(() => {
    timeHandler();
  }, []);

  return (
    <div>
      <p> {content} </p> <p> {date} </p>{" "}
    </div>
  );
};

export default RightChat;
