import React, { useEffect, useState } from "react";
import SideMenu from "../sideMenu/SideMenu";
import RightChat from "./RightChat";

function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [chatList, setChatList] = useState([]);

  const enterChat = (e) => {
    const message = e.target.value;
    const newList = {
      isGPT: false,
      msg: message,
      time: +new Date(),
    };

    setChatList((prev) => [...prev, newList]);
    e.target.value = "";
  };

  const handleKeyup = (e) => {
    if (e.keyCode !== 13) return;
    enterChat(e);
    handleSubmit(e);
  };

  const handleSubmit = (e) => {
    if (!message) return;
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
        let newList = {
          isGPT: true,
          msg: data.message,
          time: +new Date(),
        };
        setChatList((prev) => [...prev, newList]);
        setResponse(data.message);
        setMessage("");
      });
  };

  useEffect(() => {
    // console.log("챗리스트", chatList);
  }, [chatList]);

  return (
    <div className="flex h-[calc(100vh-68px)]">
      {/* <SideMenu /> */}
      {/* 채팅창 */}
      <div className="flex-1 bg-gray-100 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-bold mb-4"> Chat GPT </h1>
          <div className="flex flex-col h-3/6 justify-between">
            {/* 채팅 내용 */}
            <div className="flex-1">
              {chatList.map((item, i) => {
                console.log("아이템이란?", item);
                return <RightChat key={i} item={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-1 mr-2 p-2"
            placeholder="메시지를 입력하세요"
            value={message}
            onKeyUp={handleKeyup}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={(e) => {
              enterChat(e);
              handleSubmit(e);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
