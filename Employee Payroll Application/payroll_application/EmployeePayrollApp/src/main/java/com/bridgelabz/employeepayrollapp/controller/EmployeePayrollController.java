package com.bridgelabz.employeepayrollapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bridgelabz.employeepayrollapp.model.Employee;
import com.bridgelabz.employeepayrollapp.response.Response;
import com.bridgelabz.employeepayrollapp.service.EmployeePayrollService;
import com.bridgelabz.employeepayrollapp.service.SequenceGeneratorService;

@RestController
@RequestMapping("/employeepayroll")
public class EmployeePayrollController {
	@Autowired
	EmployeePayrollService services;
	
	@Autowired
	private SequenceGeneratorService sequenceGenerator;
	
	@PostMapping("/create")
	private ResponseEntity<Response> createData(@RequestBody Employee emp) {
		emp.setId(sequenceGenerator.generateSequence(Employee.SEQUENCE_NAME));
		Response response = services.create(emp);
		return new ResponseEntity<Response>(response, HttpStatus.OK);
	}
	
	
	@GetMapping(value = { "", "/", "/get" })
	public ResponseEntity<List<Employee>> getEmployeePayrollData() {
		List<Employee> empList = new ArrayList<>();
		empList = services.getAllData();
		if (!empList.isEmpty()) {
			return new ResponseEntity<>(empList, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/getbyid/{id}")
	public Employee getDataById(@PathVariable String id) {
		return services.getDataById(id);
	}

	@PutMapping("/update/{id}")
    public ResponseEntity<String> updateEmployee(@PathVariable String id, @RequestBody Employee emp) {
        services.update(id, emp);
        return ResponseEntity.ok("Employee updated successfully.");
    }
	
	@DeleteMapping("/delete")
	public String deleteAllEmployee(){	
		services.deleteAll();
		return "All Deleted successfully.";
	}
	
	@DeleteMapping("/delete/{employeeId}")
	public String deleteEmployee(@PathVariable String employeeId){	
		services.deleteById(employeeId);
		return "Deleted successfully.";
	}
}
