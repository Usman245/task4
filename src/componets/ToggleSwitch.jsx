import { useState } from "react";

const ToggleSwitch = () => {
  const [active, setActive] = useState("current");

  return (
    <div className="relative w-40 bg-gray-200 rounded-[16px] p-1 flex items-center">
      <div
        className={`absolute top-1 left-1 right-1 h-[46px] w-20 bg-white rounded-[16px] shadow-md transition-all duration-300 ${
          active === "past" ? "translate-x-full" : ""
        }`}
      ></div>
      <button
        className={`z-10 flex-1 text-center py-2 text-lg font-normal focus:outline-none ${
          active === "current" ? "text-black" : "text-gray-500"
        }`}
        onClick={() => setActive("current")}
      >
        Current
      </button>
      <button
        className={`z-10 flex-1 text-center py-2 text-lg font-normal focus:outline-none ${
          active === "past" ? "text-black" : "text-gray-500"
        }`}
        onClick={() => setActive("past")}
      >
        Past
      </button>
    </div>
  );
};

export default ToggleSwitch;
