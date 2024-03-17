package com.bridgelabz.employeepayrollapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="employees")
public class Employee {
	@Transient
	public static final String SEQUENCE_NAME="user_sequence";
	@Id
	private String id;
	private String name;
	private String gender;
	private long salary;
	private String department;
	
	public Employee(String name, long salary, String gender, String department) {
		super();
		this.name = name;
		this.gender = gender;
		this.salary = salary;
		this.department = department;
	}
	
	public Employee() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getSalary() {
		return salary;
	}

	public void setSalary(long salary) {
		this.salary = salary;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}	
}
