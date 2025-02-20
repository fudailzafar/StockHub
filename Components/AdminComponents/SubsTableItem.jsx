import React from "react";

const SubsTableItem = ({ email, mongoId, deleteEmail, date }) => {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-2 sm:px-6 py-4 text-[10px] sm:font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No Email"}
      </th>
      <td className="sm:px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td
        className="px-2 sm:px-6 py-4 cursor-pointer"
        onClick={() => deleteEmail(mongoId)}
      >
        x
      </td>
    </tr>
  );
};

export default SubsTableItem;
