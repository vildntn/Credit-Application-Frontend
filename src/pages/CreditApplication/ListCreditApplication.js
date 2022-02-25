
import React, { useState, useEffect} from "react";
import { Row,Table,Container } from "react-bootstrap"
import CreditApplicationService from "../../services/creditApplicationService"
function ListCreditApplication() {


    const [creditApplications, setCreditApplications] = useState([])
    
    useEffect(() => {
     let creditApplicationService=new CreditApplicationService()
     creditApplicationService.getAllCreditApplication().then((result)=>setCreditApplications(result.data))
    }, [])
    
    
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
              <th>Credit Score</th>
            </tr>
          </thead>
          <tbody>
            {creditApplications.map((creditApplication) => {
             let {firstName, lastName,nationalID,monthlyIncome,phoneNumber}=creditApplication.customer
             let {id}=creditApplication
             let {creditScore}=creditApplication.creditScore
              return (
                <tr key={id}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{nationalID}</td>
                  <td>{monthlyIncome}</td>
                  <td>{phoneNumber}</td>
                  <td>{creditScore}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </Row>
      </Container>
      )
    }
    



export default ListCreditApplication