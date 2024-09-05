import React from 'react'

function ResturentTable(props) {
  return (
    <tr>
    <td className="py-2">{props.td1}</td>
    <td className="py-2">{props.td2}</td>
    <td className="py-2">{props.td3}</td>
    <td className="py-2">
      <span className={`${props.td4 ? 'border-green-700 w-fit p-2 rounded-full border-2 bg-[#14c80f73] text-center' : 'border-red-600 w-fit p-2 rounded-full border-2 bg-[#ee0f0f66] text-center'}`}>
        {props.td4 ? 'active' : "deactive"}
      </span>
    </td>
    <td>
    <button className="bg-red-600 rounded-lg px-3 py-2 text-white">
        Delete
      </button>
    </td>
  </tr>
  )
}

export default ResturentTable