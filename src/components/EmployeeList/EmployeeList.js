import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Search from "../Search";
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState("");
  const [search, setSearch] = useState([]);
  const [filterEmployees, setFilterEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees().then((res) => {
      setEmployees(res.data.results);
      setFilterEmployees(res.data.results);
    });
  }, []);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    // this is where my filters need to go
    const results = employees.filter(
      (employee) =>
        employee.name.first
        .toLowerCase()
        .startsWith(event.target.value) ||
        employee.name.last
        .toLowerCase()
        .startsWith(event.target.value) ||
        employee.phone.startsWith(event.target.value) ||
        employee.email.startsWith(event.target.value) 
        
    );
    setFilterEmployees(results);
  };

  const handleSortFirst = () => {
      const sorted  = employees.sort((a, b) => 
      a.name.first > b.name.first ? 1 : -1
      );
      setFilterEmployees([...sorted]);
  }

  const handleSortLast = () => {
    const sorted  = employees.sort((a, b) => 
    a.name.last > b.name.last ? 1 : -1
    );
    setFilterEmployees([...sorted]);
}






  return (
    <div>
      <div>
        <Search handleInputChange={handleInputChange} search={search} />
      </div>
      <table className="table">
          <thead>
        <tr>
          <th>Image</th>
          <th className= "cursor" onClick = {() => handleSortFirst()}>First Name</th>
          <th className= "cursor" onClick = {() => handleSortLast()}>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
            
        {filterEmployees.map((employee) => (
          <tr key={employee.login.uuid} >
            <td>
              <img src={employee.picture.thumbnail}></img>
            </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob.age}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
