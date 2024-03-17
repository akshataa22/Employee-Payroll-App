import React, { useState, useEffect, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/springapi';
import './custom.css';

const UpdateEmployee = ({ employee, onUpdate }) => {
  useEffect(() => {
    document.title = "Update Employee Details";
  }, []);

  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDataOnServer(updatedEmployee);
  };

  const handleReset = () => {
    setUpdatedEmployee({ ...employee });
  };

  const updateDataOnServer = (updatedEmployee) => {
    axios.put(`${base_url}/update/${employee.id}`, updatedEmployee)
      .then((response) => {
        console.log("Employee details updated:", response.data);
        onUpdate(response.data);
      })
      .catch((error) => {
        console.error("Error updating employee details:", error);
      });
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: "center", marginBottom: 50, marginTop: 50 }}>Update Employee Details</h1>
      <Form className="update-form" onSubmit={handleSubmit}>
        <FormGroup className="customFormGroup">
          <label htmlFor="name">Name: </label>
          <input className="border" style={{ width: 510 }} value={employee.name} type="text" placeholder="Enter your name here" name="name" id="name" onChange={ handleChange} />
        </FormGroup>
        <FormGroup style={{ marginBottom:40}}>
          <label for="gender" style={{marginLeft:55 , fontWeight:"bold"}}>Gender :</label>
          <input type="radio" id="male" name="gender" value="male" style={{width:50,fontSize:15,marginLeft:90,height:20}} onChange={handleChange}/><label style={{fontSize:17,marginRight:40 }}>Male</label> 
          <input type="radio" id="female" name="gender" value="female"style={{width:50,fontSize:15,marginRight:0,height:20}} onChange={handleChange}/><label style={{fontSize:17}}>Female</label>
        </FormGroup>
        <FormGroup className="customFormGroup">
          <label  style={{ width: 500,  marginLeft:55 }} htmlFor="salary">Salary: </label>
          <input  value={employee.salary} style={{ width: 1700, marginRight:10,marginLeft:0 }} type="range" min="15000" max="400000" step="500" name="salary" id="salary" onChange={ handleChange} />
          <output>{updatedEmployee.salary}</output>
        </FormGroup>
        <FormGroup className="customFormGroup">
          <label htmlFor="department">Department: </label>
          <select  value={employee.department} style={{ width: 530, height:30, marginRight:10 }} name="department" id="department" required onChange={ handleChange}>
           <option value="">Select Department</option>
           <option value="Software Developer">Software Developer</option>
           <option value="Devops Engineer">Devops Engineer</option>
           <option value="Tester">Tester</option>
           <option value="Operations">Operations</option>
           <option value="Sales">Sales</option>
           <option value="Marketing">Marketing</option>
           <option value="Manager">Manager</option>
          </select>
        </FormGroup>
        <Button type="submit" style={{ marginLeft: 220, width: 100, height: 35, marginTop: 20 }} className="submit-button">Update</Button>
        <Button style={{ marginLeft: 30, width: 100, height: 35, backgroundColor: 'darkgray' }} type="reset" onClick={handleReset}>Reset</Button> 
      </Form>
    </Fragment>
  );
};

export default UpdateEmployee;