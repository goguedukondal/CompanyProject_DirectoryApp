import React, { useRef, useState } from "react";


function RetrieveInformation({ user }) {
 

  const [data, setData] = useState("");

  const find = useRef();

  const findfn = () => {
    const findInput = find.current.value;

    const filterD = user.filter((item) => {
      return item.Adhar_Number === findInput;
    });
    setData(filterD);
  };


  return (
    <>
      <input className="input_find" ref={find} />
      <button className="findbtn" onClick={findfn}>
        Find
      </button>

      {data === "" ? (
        <h1 className="no_data">No Data</h1>
      ) : (
        <div className="display_data">
          <p>Name :  {data[0].Name}</p>
          <p>Adhar_Number :   {data[0].Adhar_Number}</p>
          <p>Date_Of_Birth:   {data[0].Date_Of_Birth}</p>
          <p>Mobile_Number:  {data[0].Mobile_Number}</p>
          <p>Age:{data[0].Age}</p>
        </div>
      )}
    </>
  );
}

export default RetrieveInformation;
