import React, {useState}from "react";
import { useFormik } from "formik";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import CreditApplicationService from "../../services/creditApplicationService";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ShowCreditApplication from "./ShowCreditApplication";
function CheckCreditApplicationStatus() {
  let creditApplicationService = new CreditApplicationService();
  const [isShowing, setIsShowing] = useState(false);
  const [creditApplication, setCreditApplication] = useState([])

  const formik = useFormik({
    initialValues: {
      nationalID: "",
    },
    validationSchema: Yup.object({
      nationalID: Yup.string().required("National number cannot be left blank!"),
    }),
    onSubmit: (values) => {
      let nationalID = values.nationalID;
      creditApplicationService
        .checkCreditApplicationStatus(nationalID)
        .then((result) => {
            setCreditApplication([...creditApplication, result.data])
          toast.error(result.data.message);
          console.log(result.data);
        });
    },
  });

  return (
    <Container style={{ marginTop: "10em" }}>
      <Row className="justify-content-md-center">
        <Col md="auto" style={{ width: "40em" }}>
          <Card body>
            <Form onSubmit={formik.handleSubmit}>
              <h3 style={{ marginBottom: "1em", color:"#0032a1" }}>Credit Application Inquiry</h3>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
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
              <div
                style={{
                  textAlign: "center",
                  marginTop: "2em",
                  marginBottom: "1em",
                }}
              >
                <Button  style={{backgroundColor:"#0032a1",padding:"10px 25px"}} type="submit" onClick={()=>setIsShowing(true)}>
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
          {isShowing && <ShowCreditApplication creditApplication={creditApplication}/>}
        </Col>
      </Row>
    </Container>
  );
}

export default CheckCreditApplicationStatus;
