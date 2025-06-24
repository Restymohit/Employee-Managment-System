import React from 'react';
import { FaTasks } from 'react-icons/fa';
const HeaderLayout = () => {
  return (
    <header className="fixed top-0 z-50 w-full py-4 px-8 bg-[#2A2A2A] text-white shadow-md flex items-center justify-between sticky">
      <div className="flex items-center gap-2">
        <FaTasks className="text-white text-3xl" />
        <h1 className="text-2xl font-bold">TaskBoard</h1>
      </div>
      <p className="text-sm text-gray-400 hidden md:block">Your smart task assistant</p>
    </header>
  );
};

export default HeaderLayout;
