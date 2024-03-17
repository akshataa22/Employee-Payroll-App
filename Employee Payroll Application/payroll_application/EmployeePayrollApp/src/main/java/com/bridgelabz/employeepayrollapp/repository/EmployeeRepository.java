package com.bridgelabz.employeepayrollapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bridgelabz.employeepayrollapp.model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String>{

	Employee findByNameAndSalary(String name, long salary);

}
