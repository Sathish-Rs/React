import logo from './logo.svg';
import './App.css';
import React, { useState,useMemo } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from './data';

//let data = [...new Array(4)].map(()=>rowData);
const App = () => {

  const [rowData] = [...new Array(4)].map(()=>data);
    
  // const [rowData] = useState([
  //     {"EmployeeID":"10001","EmployeeName":"Michael Phelps","EmployeeSalary":21008,"country":"United States"},
  //     {"EmployeeID":"10002","EmployeeName":"Michael Phelps","EmployeeSalary":20024,"country":"United States"},
  //     {"EmployeeID":"10003","EmployeeName":"Natalie Coughlin","EmployeeSalary":23008,"country":"United States"},
  //     {"EmployeeID":"10004","EmployeeName":"Aleksey Nemov","EmployeeSalary":20050,"country":"Russia"},
  //     {"EmployeeID":"10005","EmployeeName":"Aicia Coutts","EmployeeSalary":24012,"country":"Australia"},
  //     {"EmployeeID":"10006","EmployeeName":"Missy Franklin","EmployeeSalary":26012,"country":"United States"},
  //     {"EmployeeID":"10007","EmployeeName":"Ryan Lochte","EmployeeSalary":20152,"country":"United States"},
  //     {"EmployeeID":"10008","EmployeeName":"Allison Schmitt","EmployeeSalary":24012,"country":"United States"},
  //     {"EmployeeID":"10009","EmployeeName":"Natalie Coughlin","EmployeeSalary":20804,"country":"United States"},
  //     {"EmployeeID":"10010","EmployeeName":"Ian Thorpe","EmployeeSalary":20040,"country":"Australia"},
  //     {"EmployeeID":"10011","EmployeeName":"Dara Torres","EmployeeSalary":28000,"country":"United States"},
  //     {"EmployeeID":"10012","EmployeeName":"Cindy Klassen","EmployeeSalary":20546,"country":"Canada"},
  //     {"EmployeeID":"10013","EmployeeName":"Nastia Liukin","EmployeeSalary":29008,"country":"United States"},
  //     {"EmployeeID":"10014","EmployeeName":"Marit Bjørgen","EmployeeSalary":20160,"country":"Norway"},
  //     {"EmployeeID":"10015","EmployeeName":"Sun Yang","EmployeeSalary":20412,"country":"China"},
  //     {"EmployeeID":"10016","EmployeeName":"Kirsty Coventry","EmployeeSalary":27008,"country":"Zimbabwe"},
  //     {"EmployeeID":"10017","EmployeeName":"Libby Lenton-Trickett","EmployeeSalary":20208,"country":"Australia"},
  //     {"EmployeeID":"10018","EmployeeName":"Ryan Lochte","EmployeeSalary":25008,"country":"United States"},
  //     {"EmployeeID":"10019","EmployeeName":"Inge de Bruijn","EmployeeSalary":20064,"country":"Netherlands"},
  //     {"EmployeeID":"10020","EmployeeName":"Petria Thomas","EmployeeSalary":20504,"country":"Australia"},
  //     {"EmployeeID":"10021","EmployeeName":"Ian Thorpe","EmployeeSalary":20054,"country":"Australia"},
  //     {"EmployeeID":"10023","EmployeeName":"Inge de Bruijn","EmployeeSalary":22000,"country":"Netherlands"},
  //     {"EmployeeID":"10024","EmployeeName":"Gary Hall Jr.","EmployeeSalary":20500,"country":"United States"},
  //     {"EmployeeID":"10025","EmployeeName":"Michael Klim","EmployeeSalary":20500,"country":"Australia"},
  //     {"EmployeeID":"10026","EmployeeName":"Rod White","EmployeeSalary":20080,"country":"United States"}
  //   ]);
    
    
  
  //  Emp ID ,   Emp Name , Emp Salary, Emp Address, Emp Phone
  const [columnDefs] = useState([
      { field: 'EmployeeID' },
      { field: 'EmployeeName' },
      { field: 'EmployeeSalary' },
      { field: 'country' },
    

  ])

  return (
      <div className="ag-theme-alpine" style={{width: 800, height: 1500}}>
     
          <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}>
          </AgGridReact>
      </div>
  );
};

render(<App />, document.getElementById('root'));

export default App;