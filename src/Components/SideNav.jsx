import { useState } from "react";
import { AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineReportOff, MdPeople, MdInterpreterMode } from "react-icons/md";
import { HiReceiptTax } from "react-icons/hi";
import { AiOutlineProject, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import MainRight from "./Header";

const SideNavLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-200 p-4">
      <div className="flex h-full relative overflow-hidden rounded-2xl">

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
          fixed md:static z-50
          top-0 left-0 md:left-auto
          h-full w-64
          bg-gray-700 text-white
          p-6 flex flex-col
          rounded-2xl md:rounded-none
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          `}
        >
          <h1 className="text-3xl font-bold mb-4">CORE</h1>

          <nav className="space-y-2 text-sm flex-1">
            <NavItem icon={<AiOutlineHome />} label="Home" />
            <NavItem icon={<CgProfile />} label="My Info" />
            <NavItem icon={<MdPeople />} label="People" active />
            <NavItem icon={<MdInterpreterMode />} label="Terms Management" />
            <NavItem icon={<AiOutlineProject />} label="Project Setup" />
            <NavItem icon={<HiReceiptTax />} label="Hiring" />
            <NavItem icon={<MdOutlineReportOff />} label="Report" />
          </nav>

          <div className="mt-auto flex items-center gap-2 border border-gray-600 rounded-xl py-2 px-3 cursor-pointer">
            <AiOutlineSetting />
            Settings
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col   rounded-2xl p-6 ml-0 md:ml-4">

          {/* Top Bar for Mobile */}
          <div className="md:hidden mb-4 flex items-center">
            <button onClick={() => setIsOpen(true)}>
              <AiOutlineMenu size={24} />
            </button>
            <h2 className="ml-4 font-semibold">CORE</h2>
          </div>

          <main className="flex-1 overflow-auto hide-scrollbar">
            <MainRight />
          </main>

        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition
      ${active ? "bg-white text-black" : "hover:bg-gray-600"}
    `}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default SideNavLayout;