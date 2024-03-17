package com.bridgelabz.employeepayrollapp.model;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;

@Document(collection="employees")
public class EmployeeDTO {
	@Id
    private String id;
    private int seq;    
    
	public EmployeeDTO() {
		super();
	}
	
	public EmployeeDTO(String id, int seq) {
		super();
		this.id = id;
		this.seq = seq;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
}
