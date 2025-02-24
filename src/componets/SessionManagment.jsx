import { FaArrowDown } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

const SessionsManagement = () => {
  const sessions = [
    {
      name: "Project Kickoff Meeting",
      start: "Tuesday, Jan 3 at 2:40 PM",
      end: "Tuesday, Jan 3 at 5:40 PM",
      priority: "High",
      members: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/45.jpg",
        "https://randomuser.me/api/portraits/men/50.jpg",
      ],
    },
    {
      name: "Design Review Session",
      start: "Wednesday, Feb 10 at 1:30 PM",
      end: "Wednesday, Feb 10 at 3:00 PM",
      priority: "Medium",
      members: [
        "https://randomuser.me/api/portraits/women/12.jpg",
        "https://randomuser.me/api/portraits/men/28.jpg",
        "https://randomuser.me/api/portraits/women/55.jpg",
      ],
    },
    {
      name: "Sprint Planning",
      start: "Monday, Mar 5 at 10:00 AM",
      end: "Monday, Mar 5 at 12:00 PM",
      priority: "Low",
      members: [
        "https://randomuser.me/api/portraits/men/14.jpg",
        "https://randomuser.me/api/portraits/women/30.jpg",
        "https://randomuser.me/api/portraits/men/19.jpg",
        "https://randomuser.me/api/portraits/men/28.jpg",
        "https://randomuser.me/api/portraits/women/55.jpg",
      ],
    },
  ];

  return (
    <div className="p-4 pt-16 bg-[#F7F8FB] min-h-[100vh]">
      <h1 className="text-xl font-semibold my-4 md:hidden block">
        Session Managment
      </h1>
      <div className="bg-gray-50 p-4 rounded-lg shadow-md flex md:flex-row flex-col gap-2 justify-between items-center">
        <h3 className="text-xl font-bold">Your Total Session Completed: 12</h3>
        <button className=" py-2 px-4 rounded-xl text-white bg-black flex items-center justify-center gap-2 cursor-pointer md:w-auto w-full">
          Create <FaArrowDown size={15} />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex w-full justify-between items-center">
          <h4 className="text-lg font-semibold my-1">My Sessions</h4>
          <ToggleSwitch />
        </div>
        <div>
          {sessions.map((session, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-[16px] shadow-xl mt-2 flex gap-2"
            >
              <div
                className={`h-full w-1 rounded-md  ${
                  session.priority === "Low"
                    ? "bg-green-500"
                    : session.priority === "Medium"
                    ? "bg-yellow-500"
                    : "red-500"
                }`}
              ></div>
              <div>
                <p className="font-normal text-[14px]">
                  {session.start} - {session.end}
                </p>
                <p className="text-[18px] font-medium my-2">{session.name}</p>
                <div className="flex ml-4">
                  {session?.members?.map((member, i) => (
                    <img
                      src={member}
                      alt="member"
                      className="w-6 h-6 rounded-full border-2 border-white -ml-2"
                      key={i}
                    />
                  ))}
                   <span className="text-gray-500">{`${session.members.length}/10`}</span>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionsManagement;
