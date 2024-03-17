package com.bridgelabz.employeepayrollapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bridgelabz.employeepayrollapp.exception.EmployeeAlreadyExistsException;
import com.bridgelabz.employeepayrollapp.exception.EmployeeNotFoundException;
import com.bridgelabz.employeepayrollapp.model.Employee;
import com.bridgelabz.employeepayrollapp.repository.EmployeeRepository;
import com.bridgelabz.employeepayrollapp.response.Response;

@Service
public class EmployeePayrollService {
	@Autowired
	EmployeeRepository repository;
	
	public Response create(Employee emp) {
		Employee existingEmployee = repository.findByNameAndSalary(emp.getName(), emp.getSalary());
	    if (existingEmployee != null) {
	        throw new EmployeeAlreadyExistsException("Employee with name " + emp.getName() + " already exists.");
	    }
		Response response = new Response();
		repository.save(emp);
		response.setCode(200);
		response.setMessage("Employee data Saved Sucessfully");
		return response;
	}
	
	public List<Employee> getAllData(){
		List<Employee> empList = new ArrayList<>();
		repository.findAll().forEach(emp -> empList.add(emp));
		return empList;
	}
	
	public Employee getDataById(String id) {
		Employee employee = repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee not found with id: " + id));
		return employee;
	}
	
	public Employee update(String id, Employee emp) {
	    Employee employee = repository.findById(id)
	    		.orElseThrow(() -> new EmployeeNotFoundException("Employee not found with id: " + id));
	
	        employee.setName(emp.getName());
	        employee.setGender(emp.getGender());
	        employee.setSalary(emp.getSalary());
	        employee.setDepartment(emp.getDepartment());
	        return repository.save(employee);
	 }
	
	public void deleteAll() {
		repository.deleteAll();
	}
	
	public void deleteById(String id) {
		Optional<Employee> existingEmployee = repository.findById(id);
		if (!existingEmployee.isPresent()) {
            throw new EmployeeNotFoundException("Employee with ID " + id + " not found.");
        }
		repository.deleteById(id);
	}
}
