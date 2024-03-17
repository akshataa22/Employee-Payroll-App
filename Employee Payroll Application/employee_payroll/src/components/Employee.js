import React, { useState } from "react";
import { Table, Button } from "reactstrap";
import base_url from "../api/springapi";
import axios from "axios";
import UpdateEmployee from "./UpdateEmployee";
import Modal from "react-modal";


const Employee = ({ employee, update }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteEmployee = (id) => {
    axios
      .delete(`${base_url}/delete/${id}`)
      .then(
        (response) => {
          console.log("Employee details deleted");
          update(id);
        },
        (error) => {
          console.log("Employee details not deleted !! server issue");
        }
      );
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Table bordered className="tableBody">
        <tbody>
          <tr>
            <td scope="row">{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.gender}</td>
            <td>{employee.salary}</td>
            <td>{employee.department}</td>
            <td>
            <Button className="deleteButton" onClick={() => {deleteEmployee(employee.id);}}>Delete</Button>
            <Button className="updateButton" onClick={openModal}>Update</Button></td>
          </tr>
        </tbody>
      </Table>
      <Modal isOpen={showModal} onRequestClose={closeModal}>
        <UpdateEmployee employee={employee} onUpdate={(updatedEmployee) => {
            update(updatedEmployee.id);
            closeModal();
          }}
        />
      </Modal>
    </div>
  );
};

export default Employee;
