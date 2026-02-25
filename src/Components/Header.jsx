import { FiInbox } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { CiStopwatch } from "react-icons/ci";
import EmployeeGrid from "./EmployeGrid";

export default function MainRight() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <div className="w-full rounded-2xl bg-white px-4 py-2 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* LEFT SECTION */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-semibold">People</h1>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 flex-wrap">
            <button className="rounded-full border border-gray-200 px-3 py-1.5 text-sm">
              MST
            </button>

            <button className="rounded-full border border-gray-200 flex items-center gap-2 px-3 py-1.5 text-sm whitespace-nowrap">
              <CiStopwatch />
              02:03:02
              <GiNotebook />
            </button>

            <button className="rounded-full border border-gray-200 p-2">
              <FiInbox />
            </button>

            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="profile"
              className="rounded-full w-9 h-9 object-cover border-2 border-gray-200"
            />
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
     
      <EmployeeGrid />
    </>
  );
}
