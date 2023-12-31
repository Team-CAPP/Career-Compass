import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GridApi } from 'ag-grid-community';
import Navbar from '../components/Navbar';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = props => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: 'app_deadline', headerName: 'Application Deadline', filter: true },
    { field: 'role', headerName: 'Job Title', filter: true },
    { field: 'company', headerName: 'Company Name' },
    { field: 'status', headerName: 'Application Status' },
  ]);

  const gridStyle = useMemo(() => ({ height: '600px', width: '100%' }), []);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      filter: true,
      sortable: true,
      resizable: true,
    }),
    [],
  );

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  // Example load data from server
  useEffect(() => {
    fetch('/api/')
      .then(result => result.json())
      .then(rowData => setRowData(rowData));
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback(e => {
    gridRef.current.api.deselectAll();
  }, []);

  // useEffect(() => {
  //   if (props.authenticated === false || !props.authenticated) {
  //     navigate('/');
  //   } else {
  return (
    <div>
      <div className='navBar'>
        <Navbar />
      </div>
      {/* Example using Grid's API */}
      <button onClick={buttonListener}>Add New Job Application</button>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className='ag-theme-alpine' style={gridStyle}>
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
};
// }, []);
// };

export default Dashboard;
