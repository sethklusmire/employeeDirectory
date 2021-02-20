import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Search from "./Search";

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
    const results = employees.filter((employee) => 
    employee.picture.thumbnail||
        employee.name.first
        .startsWith(event.target.value)||
        employee.name.last
        .startsWith(event.target.value)||
        employee.phone
        .startsWith(event.target.value)||
        employee.email
        .startsWith(event.target.value)||
        employee.dob.age
        )
      setFilterEmployees(results)  
  };

  

//   const handleSort = () => {
//     const sorted = employees.sort((a, b) =>
//       a.name.first > b.name.first ? 1 : -1
//     );
//     setFilterEmployees([...sorted]);
//   };

  return (<div>
      <div>
          <Search handleInputChange= {handleInputChange} search= {search}/>
      </div>
      <table className= "table">
          <tr>
              <th>Image</th>
              <th onClick={() => handleSort()}>First Name</th>
              <th onClick={() => handleSort()}>Last Name</th>
              <th onClick={() => handleSort()}>Phone</th>
              <th onClick={() => handleSort()}>Email</th>
              <th>Age</th>
          </tr>
          {console.log(filterEmployees)}
          {filterEmployees.map((employee) => (
             <tr>
              <td>
                  <img src={employee.picture.thumbnail}>
                  </img>
              </td>
              <td>
                  {employee.name.first}
              </td>
              <td>
                  {employee.name.last}
              </td>
              <td>
                  {employee.phone}
              </td>
              <td>
                  {employee.email}
              </td>
              <td>
                  {employee.dob.age}
              </td>
          </tr> 
          ))}
          

      </table>

  </div>) ;
};

export default EmployeeList;
