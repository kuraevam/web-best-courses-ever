import {Button, Container, Form} from "react-bootstrap";

function Login() {
    return (
        <Container style={{marginTop: '50px', width: '500px'}}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label><h3>Register</h3></Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button style={{width: "100%"}}>OK</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Login;
