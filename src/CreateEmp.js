import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEmp = ({ createUser, empDetails }) => {
  const [empName, setEmpName] = useState("");
  const [empRole, setEmpRole] = useState("");
  const [doj, setDOJ] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const createEmp = () => {
    if (empName && empRole && doj) {
      const data = {
        employeeName: empName,
        empRole: empRole,
        empId: empDetails.length + 1,
        doj: doj
      };
      createUser(data);
      navigate("/");
    } else {
      setError("Please enter all the details");
    }
  };
  return (
    <>
      <h1> Create User </h1>
      <label> Employee Name </label>
      <input
        type="text"
        value={empName}
        placeholder="Employee Name"
        onChange={(e) => setEmpName(e.target.value)}
      />
      <br />
      <label> Role </label>
      <input
        type="text"
        value={empRole}
        placeholder="Employee Role"
        onChange={(e) => setEmpRole(e.target.value)}
      />
      <br />
      <label> DOJ </label>
      <input
        type="text"
        value={doj}
        placeholder="DOJ"
        onChange={(e) => setDOJ(e.target.value)}
      />
      <br />
      <button onClick={() => createEmp()}>Create</button>
      {error && <div style={{ color: "red" }}> {error}</div>}
    </>
  );
};

export default CreateEmp;
