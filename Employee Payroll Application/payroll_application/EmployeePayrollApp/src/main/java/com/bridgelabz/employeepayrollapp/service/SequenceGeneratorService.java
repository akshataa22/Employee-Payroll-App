package com.bridgelabz.employeepayrollapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import static org.springframework.data.mongodb.core.query.Query.query;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

import com.bridgelabz.employeepayrollapp.model.EmployeeDTO;

@Service
public class SequenceGeneratorService {
	@Autowired
    private MongoOperations mongoOperations;

    public SequenceGeneratorService (MongoOperations mongoOperations) {
	       this.mongoOperations = mongoOperations;
	       }



	public String generateSequence(String seqName) {
        EmployeeDTO counter = mongoOperations.findAndModify(query(where("_id").is(seqName)),
	             new Update().inc("seq",1), options().returnNew(true).upsert(true),
	             EmployeeDTO.class);
	        return counter != null ? Long.toString(counter.getSeq()) : "1";

	    }
}