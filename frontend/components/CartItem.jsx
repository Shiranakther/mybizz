import React from 'react'

export default function CartItem() {
  return (
    <div>
      <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Column 1</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Column 2</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Column 3</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this <tr> with your dynamic rows */}
            <tr>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
            </tr>
            
          </tbody>
        </table>
    </div>
  )
}
