import React from "react";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";

function ShowCreditApplication({ creditApplication }) {
  const approvedStyle = {
    color: "green",
    fontSize: "1.5em",
    textAlign: "center",
  };

  return (
    <div style={{ marginTop: "5em" }}>
      {creditApplication.map((result) => {
        let { id, creditStatus, creditLimit, applicationDate } = result;
        let { firstName, lastName, monthlyIncome, nationalID, phoneNumber } =
          result.customer;

        return (
          <Card key={id}>
            <Card.Header
              style={
                creditStatus === "Approved"
                  ? { color: "green", fontSize: "1.5em", textAlign: "center" }
                  : { color: "red", fontSize: "1.5em", textAlign: "center" }
              }
            >
              Credit Application Result: {creditStatus}
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>National Number</th>
                    <th>Phone Number</th>
                    <th>Credit Limit</th>
                    <th>Result Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{nationalID}</td>
                    <td>{phoneNumber}</td>
                    <td>{creditLimit}</td>
                    <td>{applicationDate}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ShowCreditApplication;
