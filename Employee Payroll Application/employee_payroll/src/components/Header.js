import React from 'react';
import logo from './logo.png'
import { Table } from 'reactstrap';
import './custom.css';

function Header() {

  return (
    <header>
      <div className='headerStyle'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Company Logo" className='logoStyle' />
            <h1 style={{ color: "white", margin: 0 }}>Employee Payroll Application</h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <a href="/add" style={{ color: "white", marginTop: 50, height: 30, width: 120, marginRight: 60 }}>Add Employee</a>
            {/* <Input type="text" value={searchQuery} onChange={handleChange} placeholder="Search by ID" style={{ marginRight: 10 }} /> */}
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontWeight: 'bold', color: 'Highlight', marginRight: 30, textAlign:'center'}}>Employee Details</h2>
        <Table className='tableHeader'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
        </Table>
      </div>
    </header>
  );
}

export default Header;