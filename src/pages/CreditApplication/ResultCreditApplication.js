import React from "react";
import { Card , Container,Row,Col} from "react-bootstrap";

function ResultCreditApplication({ creditApplications }) {

  return (
    <Container style={{marginTop:'2em'}}>
    <Row className="justify-content-md-center">
      <Col md="auto" style={{ width: "40em" }}>
      <Card >
        <Card.Body>
          {creditApplications.map((result,index) => {
              let {creditStatus,creditLimit}=result
            return (
              <div key={index}> 
                <Card.Header style={{backgroundColor:"white"}}>
                 <div className="Grid-div">
                   <div className="result-title"> Credit Application Result: </div>
                   <div className="result">{creditStatus}</div>
                 </div>
                </Card.Header>
                <Card.Header style={{backgroundColor:"white"}}>
                  <div className="Grid-div">
                    <div className="result-title">Credit Amount You Can Withdraw:</div>
                    <div className="result">  {creditLimit} TL</div>
                  </div>
                 
                </Card.Header>
              </div>
            );
          })}
        </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default ResultCreditApplication;
