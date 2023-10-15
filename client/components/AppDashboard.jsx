import React, {useState} from 'react';
import SearchBar from './SearchBar';
import '../App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


function AppDashboard() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (searchResults) => {
    setSearchResults([

    ])
  }

  const rowData = [
    {make: 'Ford', model:'Focus',price: 40000},
    {make: 'Toyota', model:'Carolla',price: 40000},
  ];
  const columnDefs = [
    {field:'make'},
    {field:'model'},
    {field:'price'}
  ];

    return (
      <>
      <div className ='ag-theme-alpine' style={{height:500}}>
        <h1 id = 'AppDashBoardTitle'> Job Search Table</h1>
        <SearchBar></SearchBar>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}/>
      </div>
      </>
    )
  
  }
  
  export default AppDashboard;