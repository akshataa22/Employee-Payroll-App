import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import base_url from '../api/springapi';
import { Button, FormGroup, Form } from 'reactstrap';
import './custom.css';
import logo from './logo.png'

const AddEmployee = () => {
  useEffect(() => {
    document.title = "Add Employee Details";
  }, []);

  const [employeeDetails, setFormData] = useState({
    name: '',
    gender: '',
    salary: '',
    department: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    postDataOnServer(employeeDetails);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      gender: '',
      salary: '',
      department: ''
    });
    setError('');
    setSuccess('');
  };

  const postDataOnServer = (data) => {
    axios.post(`${base_url}/create`, data).then(
      (response) => {
        setSuccess('Employee data added successfully.');
        setError('');
        console.log(response.data);
      }, (error) => {
        setError('Employee with same name and salary already exists. Please Try Again....');
        setSuccess('');
        console.error('Error adding employee:', error);
      })
  }

  const handleChange = (e) => {
    setError('');
    setSuccess('');
    setFormData({ ...employeeDetails, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className='headerStyle'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Company Logo" className='logoStyle' />
            <h1 style={{ color: "white", margin: 0 }}>Employee Payroll Application</h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <a href="/" style={{ color: "white", marginTop: 50, height: 30, width: 125 }}>Home</a>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center",marginRight: 90 , marginTop: 60, marginBottom:60 }}>Add Employee Details</h1>
      <Form className="customForm" onSubmit={handleSubmit}>
        <FormGroup className="customFormGroup">
          <label htmlFor="name">Name: </label>
          <input className="border" style={{ width: 510 }} type="text" placeholder="Enter your name here" name="name" id="name"  required onChange={ handleChange} />
        </FormGroup>
        <FormGroup style={{ marginBottom:40}}>
          <label for="gender" style={{marginLeft:55 , fontWeight:"bold"}}>Gender :</label>
          <input type="radio" id="male" name="gender" value="male" style={{width:50,fontSize:15,marginLeft:90,height:20}} required onChange={handleChange}/><label style={{fontSize:15,marginRight:40,}}>Male</label> 
          <input type="radio" id="female" name="gender" value="female"style={{width:50,fontSize:15,marginRight:0,height:20}} required onChange={handleChange}/><label style={{fontSize:15}}>Female</label>
                </FormGroup>
        <FormGroup className="customFormGroup">
            <label  style={{ width: 500,  marginLeft:55 }} htmlFor="salary">Salary: </label>
            <input style={{ width: 1700, marginRight:10,marginLeft:0 }} type="range" min="15000" max="400000" step="500" name="salary" id="salary" required onChange={ handleChange} />
  <output>{employeeDetails.salary}</output>
</FormGroup>
<FormGroup className="customFormGroup">
  <label htmlFor="department">Department: </label>
  <select style={{ width: 530, height:30, marginRight:10 }} name="department" id="department" required onChange={ handleChange}>
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
  {success && ( <div className="message success-message"> <p>{success}</p> </div> )}
  {error && ( <div className="message error-message"> <p>{error}</p> </div> )}
       <div >
          <Button style={{ marginLeft: 300, height:35, width:80 }}  className="submit-button" type="submit">Submit</Button>
          <Button style={{ marginLeft: 10, height:35,  width:80, backgroundColor:'darkgrey' }} type="reset" onClick={handleReset}>Reset</Button>
       </div>
      </Form>
    </Fragment>
  );
}

export default AddEmployee;