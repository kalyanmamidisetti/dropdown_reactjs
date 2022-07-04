import React, { useEffect, useState } from "react";
import "./styles.css";
import Select from "@mui/material/Select";
import { filter } from "lodash";

const empData = [
  { id: 1, name: "John", role: "devloper", dateJoined: "10/09/2020" },
  { id: 2, name: "Smith", role: "manager", dateJoined: "01/02/2018" },
  { id: 3, name: "Bob", role: "network engineer", dateJoined: "14/04/2019" },
  { id: 4, name: "Brrok", role: "manager", dateJoined: "18/06/2017" },
  { id: 5, name: "Glen", role: "finance", dateJoined: "18/06/2017" },
  { id: 6, name: "Ethan", role: "devloper", dateJoined: "12/12/2020" },
  { id: 7, name: "Evelyn", role: "devloper", dateJoined: "04/07/2020" },
  { id: 8, name: "Daniel", role: "network engineer", dateJoined: "03/06/2020" }
];
export default function App() {
  const employeeData = empData;
  let roles = [];
  const [fil, setFil] = useState([]);

  employeeData &&
    employeeData.forEach((data, index) => {
      if (data && data.role) {
        roles.push(data.role);
      }
    });

  const handleChange = (event) => {
    console.log(event.target.value);
    let newCheck = [];
    let dropdownValue = event.target.value;
    employeeData.filter((data) => {
      if (data.role === dropdownValue) {
        newCheck.push(data);
      }
    });
    console.log(newCheck, "test");
    setFil(newCheck);
  };

  console.log(fil);
  return (
    <div className="App">
      <select name="cars" id="cars" onChange={handleChange}>
        {roles && roles.length ? (
          <React.Fragment>
            {roles.map((data, index) => {
              return (
                <option key={index} value={data}>
                  {data}
                </option>
              );
            })}
          </React.Fragment>
        ) : null}
      </select>

      {fil && fil.length ? (
        <React.Fragment>
          {fil.map((data, index) => (
            <p>{data && data.name && data.name}</p>
          ))}
        </React.Fragment>
      ) : null}
    </div>
  );
}
