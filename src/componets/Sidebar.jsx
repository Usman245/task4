import { useState } from "react";
import { FiMenu, FiBell } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard, MdSettings } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendar, BsChatDots } from "react-icons/bs";
import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, openTab, setOpenTab }) => {
  return (
    <aside
      className={`bg-black text-white h-screen p-4 w-64 transition-all duration-500 fixed md:relative z-[100] ${
        isOpen ? "left-0" : "md:left-0 left-[-280px]"
      }`}
    >
      <div className="flex  items-center space-x-2 ">
        <img src={logo} alt="Logo" className="w-[31px] h-[45px]" />
       <h2 className="text-lg font-bold">Rostrum Education</h2>
      </div>
      <nav className="mt-8">
        <ul className="space-y-4">
          <li
            className={`flex items-center space-x-2 text-white cursor-pointer rounded-xl py-2 px-3 ${
              openTab === "dashboard"
                ? "text-white bg-blue-500 cursor-pointer "
                : ""
            }`}
            onClick={() => setOpenTab("dashboard")}
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </li>
          <li
            className={`flex items-center space-x-2 text-white cursor-pointer rounded-xl py-2 px-3 ${
              openTab === "session"
                ? "text-white bg-blue-500 cursor-pointer "
                : ""
            }`}
            onClick={() => setOpenTab("session")}
          >
            <BsCalendar size={20} />
            <span>Sessions Management</span>
          </li>
          <li
            className={`flex items-center space-x-2 text-white cursor-pointer rounded-xl py-2 px-3 ${
              openTab === "student"
                ? "text-white bg-blue-500 cursor-pointer "
                : ""
            }`}
            onClick={() => setOpenTab("student")}
          >
            <HiOutlineUserGroup size={20} /><span>Students Management</span>
          </li>
          <li
            className={`flex items-center space-x-2 text-white cursor-pointer rounded-xl py-2 px-3 ${
              openTab === "conservation"
                ? "text-white bg-blue-500 cursor-pointer "
                : ""
            }`}
            onClick={() => setOpenTab("conservation")}
          >
            <BsChatDots size={20} />
            <span>Conversations</span>
          </li>
          <li
            className={`flex items-center space-x-2 text-white cursor-pointer rounded-xl py-2 px-3 ${
              openTab === "settings"
                ? "text-white bg-blue-500 cursor-pointer "
                : ""
            }`}
            onClick={() => setOpenTab("settings")}
          >
            <MdSettings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-4 left-4 flex items-center justify-btween w-[90%] border border-gray-200 space-x-2 p-2 rounded-xl cursor-pointer text-white">
        <span>Logout</span>
        <FaSignOutAlt size={20} />
      </div>
    </aside>
  );
};

export default Sidebar;
