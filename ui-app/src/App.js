import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './data.json';




function App() {
 
  return (

    <div className="App">

      <table>

        <tr>

          <th>EmployeeID</th>

          <th>EmployeeName</th>

          <th>EmployeeSalary</th>

          <th>country</th>



        </tr>

        {data.map((val, key) => {

          return (

            <tr key={key}>

              <td>{val.EmployeeID}</td>

              <td>{val.EmployeeName}</td>

              <td>{val.EmployeeSalary}</td>

              <td>{val.country}</td>



            </tr>

          )

        })}

      </table>

    </div>

  );

}

 



export default App;
