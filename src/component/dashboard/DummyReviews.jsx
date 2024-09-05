import React from 'react'

function DummyReviews() {
  return (
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
        </tbody>  )
}

export default DummyReviews