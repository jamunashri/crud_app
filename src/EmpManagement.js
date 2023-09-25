import React from "react";
import { useNavigate } from "react-router-dom";

const EmpManagement = ({ empDetails, deleteUser }) => {
  const navigate = useNavigate();
  const createUser = () => {
    navigate("/create-user");
  };
  const edit = (id) => {
    navigate(`/edit-user/${id}`);
  };
  return (
    <>
      <button onClick={() => createUser()}> Create</button>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>DOJ</th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {empDetails?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.empId}</td>
                <td>{item.employeeName} </td>
                <td>{item.empRole} </td>
                <td>{item.doj} </td>
                <td>
                  <button onClick={() => edit(item.empId)}> Edit</button>
                  <button onClick={() => deleteUser(item.empId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EmpManagement;
