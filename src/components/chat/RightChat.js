import React, { useEffect, useState, useCallback } from "react";

const RightChat = ({ item }) => {
  const { isGPT, msg, time } = item;
  const [date, setDate] = useState();

  const timeHandler = useCallback(() => {
    const hour = new Date(time).getHours();
    const minute =
      new Date(time).getMinutes() > 10
        ? new Date(time).getMinutes()
        : "0" + new Date(time).getMinutes();
    setDate(`${hour}:${minute}`);
  }, [item]);

  useEffect(() => {
    timeHandler();
  }, []);

  return (
    <div className={`flex ${isGPT ? "" : "flex-row-reverse justify-start"}`}>
      <div className="bg-white p-3 max-w-[70%] rounded">
        <p>{msg}</p>
      </div>
      <div className="self-end mx-1.5">
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default RightChat;
