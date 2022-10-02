import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';
import data from './data.json';


const [data,setdata]=useState(data);

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
