import { useEffect, useState } from "react";
import "./styles.css";
import EmpManagement from "./EmpManagement";
import { Route, Routes, useNavigate } from "react-router-dom";
import EditEmp from "./EditEmp";
import CreateEmp from "./CreateEmp";

export default function App() {
  const navigate = useNavigate();
  const [empDetails, setEmpDetails] = useState([]);
  useEffect(() => {
    const { data } = require("./data");
    setEmpDetails(data);
  }, []);
  const deleteUser = (id) => {
    const data = empDetails.filter((item) => item.empId !== id);
    setEmpDetails(data);
  };
  const createUser = (data) => {
    empDetails.push(data);
    setEmpDetails(empDetails);
  };
  const editUser = (id, data) => {
    const datas = empDetails.map((i) => {
      if (i.empId == id) {
        i.employeeName = data.employeeName;
        i.empRole = data.empRole;
        i.doj = data.doj;
      }
      return i;
    });
    setEmpDetails(datas);
    navigate("/");
  };
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h1>CRUD Operation</h1>
              <EmpManagement
                empDetails={empDetails}
                deleteUser={deleteUser}
                editUser={editUser}
              />
            </>
          }
        />
        <Route
          exact
          path="/edit-user/:id"
          element={<EditEmp empDetails={empDetails} editUser={editUser} />}
        />
        <Route
          exact
          path="/create-user"
          element={
            <CreateEmp createUser={createUser} empDetails={empDetails} />
          }
        />
      </Routes>
    </div>
  );
}
