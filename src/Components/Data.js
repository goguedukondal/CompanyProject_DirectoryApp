import React from "react";

function Data({ user, del }) {
  return user.map((item) => (
    <tr key={item.Adhar_Number}>
      <td className="t1 t3">{item.Name}</td>
      <td className="t1 t3">{item.Date_Of_Birth}</td>
      <td className="t1 t3">{item.Adhar_Number}</td>
      <td className="t1 t3">{item.Mobile_Number}</td>
      <td className="t1 t3">{item.Age}</td>
      <td className="t1  t3 del" onClick={() => del(item.Adhar_Number)}>
        Delete
      </td>
    </tr>
  ));
}

export default Data;
