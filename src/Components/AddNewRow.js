import React, { useState, useEffect } from "react";

function AddNewRow({ user, setUser }) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [adhar, setAdhar] = useState("");
  const [mobile, setMobile] = useState("");

  const save = () => {
    //creating object

    let date = birth.split("-");
    console.log(date)
    let personAge = new Date().getFullYear() - date[0];

    let obj = {
      Name: name,
      Date_Of_Birth: birth,
      Adhar_Number: adhar,
      Mobile_Number: mobile,
      Age: personAge,
    };
    if (adhar.length === 12 && mobile.length === 10) {
      setUser([...user, obj]);
      setName("");
      setBirth("");
      setAdhar("");
      setMobile("");
    } else if (adhar.length < 12) {
      alert("Please Check The Aadhar Number");
    } else if (mobile.length < 10) {
      alert("Please Check The Phone Number");
    }
  };

  

  //saving data to local storage

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <tr>
        <td className="t1">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="t2"
            required
          />
        </td>
        <td className="t1">
          <input
            onChange={(e) => setBirth(e.target.value)}
            value={birth}
            type="date"
            className="t2"
            required
          />
        </td>
        <td className="t1">
          <input
            onChange={(e) => setAdhar(e.target.value)}
            value={adhar}
            type="number"
            className="t2"
            required
          />
        </td>
        <td className="t1">
          <input
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type="number"
            className="t2"
            required
          />
        </td>
        <td className="t1"></td>
        <td className="t1 save" onClick={save}>
          Save
        </td>
      </tr>
    </>
  );
}

export default AddNewRow;
