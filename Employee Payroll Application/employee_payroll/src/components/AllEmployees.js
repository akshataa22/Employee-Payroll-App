import React, { useState, useEffect } from 'react';
import axios from 'axios';
import base_url from '../api/springapi';
import Employee from './Employee';

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getAllEmployeesFromServer = () => {
    axios.get(`${base_url}/get`).then(
      (response) => {
        console.log(response.data);
      setEmployees(response.data)
  },  (error) => {
      console.log(error);
    });
  };

  const removeEmployeebyId =(id)=>{
    setEmployees(employees.filter((c)=> c.id!== id));
}

  useEffect(() => {
    getAllEmployeesFromServer();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      getAllEmployeesFromServer();
      return;
    }
    axios.get(`${base_url}/getbyid/${query}`).then(
      (response) => {
        setEmployees(response.data ? [response.data] : []);
      },
      (error) => {
        console.log(error);
        setEmployees([]);
      }
    );
  };

  return (    
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        {
          employees.length > 0 ? employees.map((item) => <Employee key={item.id} employee={item} update={removeEmployeebyId} />) : "No employees in the list."
        }
      </div>
   
  );
}

export default AllEmployees;