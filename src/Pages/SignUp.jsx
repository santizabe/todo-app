import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password doesn't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      await navigate("/login");
    } catch {
      setError("Failed to create an acount");
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account?&nbsp;
        <Link to="/login">Log in</Link>
      </div>
    </div>
  </Container>
  );
}

export default SignUp;
