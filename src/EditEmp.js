import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEmp = ({ empDetails, editUser }) => {
  let { id } = useParams();
  console.log(
    empDetails.filter((i) => i.empId === Number(id)),
    id,
    "ddaata"
  );
  const [emp, setEmp] = useState(
    empDetails.filter((i) => i.empId === Number(id))[0]
  );
  const [empName, setEmpName] = useState(emp?.employeeName);
  const [empRole, setEmpRole] = useState(emp?.empRole);
  const [doj, setDOJ] = useState(emp?.doj);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <h1> Edit User </h1>
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
      <button
        onClick={() =>
          editUser(id, {
            employeeName: empName,
            empRole: empRole,
            doj: doj,
            empId: Number(id)
          })
        }
      >
        Update
      </button>
      {error && <div style={{ color: "red" }}> {error}</div>}
    </>
  );
};

export default EditEmp;
