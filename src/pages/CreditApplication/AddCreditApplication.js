import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import CreditApplicationService from "../../services/creditApplicationService";
import { toast } from "react-toastify";
import ResultCreditApplication from "./ResultCreditApplication";
import * as Yup from "yup";
import { Link } from "react-router-dom";


function AddCreditApplication() {
  const [isShowing, setIsShowing] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false)
  const [creditApplications, setCreditApplications] = useState([]);
  let creditApplicationService = new CreditApplicationService();


  // const redirectAfterSubmit=()=>{
  //   setTimeout(() => {
  //     setIsShowing(true)
  //   }, 3000);
  //   if(isShowing){
  //     setIsRedirect(true)
  //   }
  // }

  console.log(isShowing);
  console.log(creditApplications);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      nationalID: "",
      phoneNumber: "",
      monthlyIncome: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name cannot be left blank!"),
      lastName: Yup.string().required("last Name cannot be left blank!"),
      nationalID: Yup.string().required("National number cannot be left blank!"),
      phoneNumber: Yup.string().required("Phone Number cannot be left blank!"),
      monthlyIncome: Yup.number().required("Monthly Income cannot be left blank!"),
    }),
    onSubmit: (values) => {
      let creditApplication = {
        firstName: values.firstName,
        lastName: values.lastName,
        nationalID: values.nationalID,
        phoneNumber: values.phoneNumber,
        monthlyIncome: values.monthlyIncome,
      };
      creditApplicationService
        .checkCreditApplicationResult(creditApplication)
        .then((result) => {
          //&& formik.resetForm()
          result.data.creditStatus === "Approved"
            ? toast.success(result.data.creditStatus) 
            : toast.error(result.data.creditStatus);
          setCreditApplications([result.data]);
        });
      console.log(creditApplication);
    },
  });

  return (
    <Container style={{marginTop:"10em"}}>
      <Row className="justify-content-md-center">
        <Col md="auto" style={{ width: "40em" }}>
          <Card body>
            <Form onSubmit={formik.handleSubmit}>
              <h3 style={{ marginBottom: "1em", color:"#0032a1"}}>Credit Application</h3>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  First Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                    {formik.errors.firstName && formik.touched.firstName && (
                      <Form.Label basic pointing style={{color:"red"}}>
                        {formik.errors.firstName}
                      </Form.Label>
                    )}
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Last Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                   {formik.errors.lastName && formik.touched.lastName && (
                      <Form.Label basic style={{color:"red"}} pointing>
                        {formik.errors.lastName}
                      </Form.Label>
                    )}
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  National Number
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="National Number"
                    name="nationalID"
                    value={formik.values.nationalID}
                    onChange={formik.handleChange}
                  />
                   {formik.errors.nationalID && formik.touched.nationalID && (
                      <Form.Label basic style={{color:"red"}} pointing>
                        {formik.errors.nationalID}
                      </Form.Label>
                    )}
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Phone Number
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                   {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                      <Form.Label basic style={{color:"red"}} pointing>
                        {formik.errors.phoneNumber}
                      </Form.Label>
                    )}
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Monthly Income
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Monthly Income"
                    name="monthlyIncome"
                    value={formik.values.monthlyIncome}
                    onChange={formik.handleChange}
                  />
                    {formik.errors.monthlyIncome && formik.touched.monthlyIncome && (
                      <Form.Label basic style={{color:"red"}} pointing>
                        {formik.errors.monthlyIncome}
                      </Form.Label>
                    )}
                </Col>
              </Form.Group>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "2em",
                  marginBottom: "1em",
                  
                }}
              >
                {/* <Link to="/checkCreditApplicationStatus" className="btn-custom" type="submit">Apply</Link> */}
                <Button
                  style={{backgroundColor:"#0032a1",padding:"10px 25px"}}
                  type="submit"
                  onClick={()=>setIsShowing(true)}
                >
                  Apply
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      {isShowing ? (
        <ResultCreditApplication creditApplications={creditApplications} />
      ) : null} 
 
    </Container>
  );
}

export default AddCreditApplication;
