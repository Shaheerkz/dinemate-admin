import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function userDummyRow() {
  return (
    // <tbody>
    //   <tr>
    //     <td>1</td>
    //     <td className="flex gap-2 items-center">
    //       <span>David</span>{" "}
    //       <Link
    //         className="bg-green-600 text-white p-1 rounded-md "
    //         to={"/edit-user"}
    //       >
    //         <FontAwesomeIcon icon={faPen} />
    //       </Link>
    //     </td>
    //     <td>10-20-2024</td>
    //     <td className="flex ">
    //       <span className="border-green-700  w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
    //         Active
    //       </span>
    //     </td>
    //     <td className="">
    //       <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
    //         Delete
    //       </button>
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>2</td>
    //     <td className="flex gap-2 items-center">
    //       <span>Michle</span>{" "}
    //       <Link
    //         className="bg-green-600 text-white p-1 rounded-md "
    //         to={"/edit-user"}
    //       >
    //         <FontAwesomeIcon icon={faPen} />
    //       </Link>
    //     </td>
    //     <td>10-20-2024</td>
    //     <td className="flex">
    //       <span className="border-red-600 w-fit p-2 rounded-full border-2 bg-[#ee0f0f66] text-center">
    //         Deactive
    //       </span>
    //     </td>
    //     <td>
    //       <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
    //         Delete
    //       </button>
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>3</td>
    //     <td className="flex gap-2 items-center">
    //       <span>David</span>{" "}
    //       <Link
    //         className="bg-green-600 text-white p-1 rounded-md "
    //         to={"/edit-user"}
    //       >
    //         <FontAwesomeIcon icon={faPen} />
    //       </Link>
    //     </td>
    //     <td>10-20-2024</td>
    //     <td className="flex ">
    //       <span className="border-green-700  w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
    //         Active
    //       </span>
    //     </td>
    //     <td className="">
    //       <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
    //         Delete
    //       </button>
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>4</td>
    //     <td className="flex gap-2 items-center">
    //       <span>David</span>{" "}
    //       <Link
    //         className="bg-green-600 text-white p-1 rounded-md "
    //         to={"/edit-user"}
    //       >
    //         <FontAwesomeIcon icon={faPen} />
    //       </Link>
    //     </td>
    //     <td>10-20-2024</td>
    //     <td className="flex ">
    //       <span className="border-green-700  w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center">
    //         Active
    //       </span>
    //     </td>
    //     <td className="">
    //       <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
    //         Delete
    //       </button>
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>5</td>
    //     <td className="flex gap-2 items-center">
    //       <span>Michle</span>{" "}
    //       <Link
    //         className="bg-green-600 text-white p-1 rounded-md "
    //         to={"/edit-user"}
    //       >
    //         <FontAwesomeIcon icon={faPen} />
    //       </Link>
    //     </td>
    //     <td>10-20-2024</td>
    //     <td className="flex">
    //       <span className="border-red-600 w-fit p-2 rounded-full border-2 bg-[#ee0f0f66] text-center">
    //         Deactive
    //       </span>
    //     </td>
    //     <td>
    //       <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
    //         Delete
    //       </button>
    //     </td>
    //   </tr>
    // </tbody>
    <tbody>
    {[...Array(5).keys()].map((index) => (
      <tr key={index} className="animate-pulse">
        <td className="p-4 bg-gray-100 h-8 rounded-md"></td>
        <td className="p-4 bg-gray-100 h-8 rounded-md flex items-center gap-2">
          <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </td>
        <td className="p-4 bg-gray-100 h-8 rounded-md"></td>
        <td className="p-4 bg-gray-100 h-8 rounded-md"></td>
        <td className="p-4 bg-gray-100 h-8 rounded-md">
          <div className="w-20 h-8 bg-gray-300 rounded-md"></div>
        </td>
      </tr>
    ))}
  </tbody>
  );
}

export default userDummyRow;
