import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { SlCursorMove } from "react-icons/sl";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { BiGridAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { RiFlaskLine } from "react-icons/ri";
import { AiOutlineDownload } from "react-icons/ai";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Product Manager",
  "HR Manager",
  "Marketing Head",
  "Finance Analyst",
  "Sales Executive",
  "Operations Manager",
  "Team Lead",
];

const EmployeeGrid = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search , setSearch] = useState("");

  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );

        const users = usersRes.data;

        // create 100 fake users for pagination
        const expanded = Array(10)
          .fill(users)
          .flat()
          .map((user, index) => ({
            id: index + 1,
            name: user.name,
            role: roles[index % roles.length],
            image: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`, // stable image
          }));

        setEmployees(expanded);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);


  // filter
  const filteredEmployees = employees.filter(
    (emp) => emp.name.toLowerCase().includes(search.toLowerCase()) || emp.id.toString().includes(search)
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  

  return (
    <>
      <div className="w-full rounded-xl bg-white p-2 mt-3">
        <div className="flex flex-wrap justify-between items-center mt-3 gap-4">
          <div className="relative w-full sm:w-[70%] md:w-[40%]">
            <AiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Employee Name or Number"
              className="w-full border border-gray-200 rounded-2xl py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex items-center">
            <button className="border-2 border-gray-100 rounded-2xl px-4 py-2">
              <AiOutlineDownload />
            </button>
            <button className="border-2 border-gray-100 rounded-2xl px-4 py-2">
              <RiFlaskLine style={{ transform: "rotate(180deg)" }} />
            </button>
            <button className="bg-gray-700 rounded-2xl px-2 h-10  text-white">
              <AiOutlinePlus />
            </button>
            <div className="flex border-2 border-gray-100 rounded-2xl px-4 py-2  gap-4">
              <button className="px-2 py-2 bg-gray-700 rounded-xl text-white">
                <BiGridAlt />
              </button>
              <button>
                <HiOutlineDocumentDuplicate />
              </button>
              <button>
                <SlCursorMove />
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-screen p-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentEmployees.map((emp) => (
              <div
                key={emp.id}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="font-medium text-gray-900">{emp.name}</h3>
                <p className="text-sm text-gray-500">{emp.role}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-start gap-4 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              <AiFillLeftCircle />
            </button>

            <span>
              Rows Per Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
            >
              <AiFillRightCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeGrid;
