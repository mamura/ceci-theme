import { Fragment } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo-big.png";
import googleIcon from "../../assets/images/google-icon.svg";
import facebookIcon from "../../assets/images/facebook-icon.svg";

const Signin = () => {
  return (
    <Fragment>
      <div className="page main-signin-wrapper">
        <Row className="signpages text-center">
          <Col md={12}>
            <Card>
              <Row className="row-sm">
                <Col md={12} className="login-form">
                  <Container fluid className="main-container">
                    <Row className="row-sm">
                      <Card.Body className="mt-2 mb-2">
                        <div className="logo mb-5">
                          <img src={logo} alt="Logo Ceci Moments" className="mobile-logo" />
                        </div>

                        <Form>
                          <h2 className="mb-2">
                            Entre no Ceci Moments
                          </h2>
                          <p className="mb-4 tx-16">
                            Encontre, baixe, compartilhe e organize as fotos em que você aparece.
                          </p>

                          <Form.Group className="text-start form-group" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              placeholder="Email"
                              type="Email"
                            />
                          </Form.Group>

                          <Form.Group
                            className="text-start form-group"
                            controlId="formpassword"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              placeholder="Senha"
                              type="password"
                            />
                          </Form.Group>

                          <div className="mb-1 text-start forgot-password">
                            <Link to="/custompages/forgotpassword/">
                              Esqueceu sua senha ? 
                            </Link>
                          </div>
                          
                          <div className="d-grid gap-2 mt-4 mb-4">
                            <button className="btn btn-primary">
                              Entrar
                            </button>
                          </div>
                        </Form>
                        
                        <h4 className="d-grid mt-2 mb-2">ou</h4>

                        <div className="d-grid gap-2 mt-4 mb-4">
                          <button className="btn">
                            <object id="svg1" data={googleIcon} type="image/svg+xml"></object>
                            Entrar com Google
                          </button>
                          
                          <button className="btn">
                            <object id="svg1" data={facebookIcon} type="image/svg+xml"></object>
                            Entrar com Facebook
                          </button>
                        </div>

                        <div className="mb-1 text-start forgot-password">
                          Não tem conta? &nbsp;
                          <Link to="/custompages/forgotpassword/">
                            <strong>Cadastre-se</strong>
                          </Link>
                        </div>
                      </Card.Body>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

Signin.propTypes        = {};
Signin.defaultPropos    = {}

export default Signin;