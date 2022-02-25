import React, { useState, useEffect } from "react";
import CustomerService from "../../services/customerService";
import { Container, Row, Table } from 'react-bootstrap';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  let customerService = new CustomerService();

  useEffect(() => {
    customerService
      .getAllCustomer()
      .then((result) => setCustomers(result.data));
     console.log(customers)
  }, []);

  return (
    <Container>
      <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Identification Number</th>
            <th>Monthly Income</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
           let {id,firstName, lastName,identificationNumber,monthlyIncome,phoneNumber,email}=customer
            return (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{identificationNumber}</td>
                <td>{monthlyIncome}</td>
                <td>{phoneNumber}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </Row>
    </Container>
        
  );
}

export default CustomerList;
