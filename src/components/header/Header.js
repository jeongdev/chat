import React from "react";

// 헤더 컴포넌트 생성
const Header = () => {
  return (
    // 헤더 영역
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600 shadow-lg">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-gray-800 tracking-widest">
          My Website
        </h1>
      </div>
      <nav className="flex items-center">
        {/* <a
          className="text-gray-800 text-base mx-4 cursor-pointer hover:text-indigo-600 transition ease-in duration-150"
          href="#"
        >
          Home
        </a>
        <a
          className="text-gray-800 text-base mx-4 cursor-pointer hover:text-indigo-600 transition ease-in duration-150"
          href="#"
        >
          Chat
        </a>
        <a
          className="text-gray-800 text-base mx-4 cursor-pointer hover:text-indigo-600 transition ease-in duration-150"
          href="#"
        >
          Login
        </a> */}
        <img
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </nav>
    </header>
  );
};

export default Header;
