import React, { useState } from "react";
import RightChat from "./RightChat";

function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
        setMessage("");
        return;
      });
  };

  return (
    <div className="flex h-[calc(100vh-40px)]">
      {" "}
      {/* 채팅방 목록 */}{" "}
      <div className="w-1/4 bg-gray-200 p-4">
        <h1 className="text-lg font-bold mb-4"> 채팅방 목록 </h1>{" "}
        <ul>
          <li className="mb-2"> 채팅방 1 </li>{" "}
          <li className="mb-2"> 채팅방 2 </li>{" "}
          <li className="mb-2"> 채팅방 3 </li>{" "}
        </ul>{" "}
      </div>{" "}
      {/* 채팅창 */}{" "}
      <div className="flex-1 bg-gray-100 p-4">
        <h1 className="text-lg font-bold mb-4"> 채팅방 1 </h1>{" "}
        <div className="flex flex-col h-3/6">
          {" "}
          {/* 채팅 내용 */}{" "}
          <div className="flex-1">
            <RightChat content={response} timestamp={+new Date()} />{" "}
          </div>{" "}
          <div className="flex">
            <input
              type="text"
              className="flex-1 mr-2 p-2"
              placeholder="메시지를 입력하세요"
              value={message}
              onKeyUp={handleSubmit}
              onChange={(e) => setMessage(e.target.value)}
            />{" "}
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded">
              {" "}
              전송{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Chat;
