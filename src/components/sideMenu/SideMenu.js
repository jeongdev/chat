import React from "react";

const SideMenu = () => {
  return (
    <>
      <div className="w-1/4 bg-gray-200 p-4">
        <h1 className="text-lg font-bold mb-4"> 채팅방 목록 </h1>
        <ul>
          <li className="mb-2"> 채팅방 1 </li>
          <li className="mb-2"> 채팅방 2 </li>
          <li className="mb-2"> 채팅방 3 </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
