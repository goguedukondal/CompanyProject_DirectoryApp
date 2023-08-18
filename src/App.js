import "./App.css";

import RetrieveInformation from "./Components/RetrieveInformation";
import AddNewPerson from "./Components/AddNewPerson";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const [addButton, setAddButton] = useState(false);
  const [addNewPerson, setAddNewPerson] = useState(true);
  const [retrieveInformation, setRetrieveInformation] = useState(false);

  function del(Adhar_Number) {
    const filteredUser = user.filter((element, index) => {
      return element.Adhar_Number !== Adhar_Number;
    });
    setUser(filteredUser);
  }

  const handleRetrieveButton = () => {
    setRetrieveInformation(true);
    setAddNewPerson(false);
  };
  const handleAddButton = () => {
    setAddNewPerson(true);
    setRetrieveInformation(false);
  };

  const addButtonClicked = () => {
    setAddButton(true);
  };

  return (
    <div className="App">
      <div className="navbar">Gogu Edukondal's Directory App</div>
      <div className="button-container">
        <button className="btn" onClick={handleAddButton}>
          Add New Person
        </button>
        <button className="btn" onClick={handleRetrieveButton}>
          Retrieve Information
        </button>
      </div>

      {!retrieveInformation && addNewPerson ? (
        <div className="tableContainer">
          <h3>Add New Person</h3>
          <AddNewPerson
            user={user}
            del={del}
            addButton={addButton}
            setUser={setUser}
          />
          <button className="addbtn" onClick={addButtonClicked}>
            Add
          </button>
        </div>
      ) : (
        <div className="tableContainer">
          <h3>Retrieve Information</h3>
          <RetrieveInformation user={user} />
        </div>
      )}
    </div>
  );
}

export default App;
