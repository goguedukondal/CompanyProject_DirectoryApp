import React from "react";
import AddNewRow from "./AddNewRow";

import Data from "./Data";

function AddNewPerson({ user, del, addButton, setUser }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Adhar Number</th>
            <th>Mibile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <Data user={user} del={del} />
          {addButton ? <AddNewRow user={user} setUser={setUser} /> : ""}
        </tbody>
      </table>
    </>
  );
}

export default AddNewPerson;
