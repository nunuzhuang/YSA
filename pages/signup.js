import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpPage() {
  const auth = getAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossOrigin="anonymous"
      />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">YSA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="login">Log in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <form className="signupForm">
        <div class="mb-3">
          <label for="exampleInputName" className="form-label">
            Full Name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputName"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            //aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            //aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            This will be the email other users will use to contact you.
          </div>
        </div>
        <div class="mb-3" className="signupPw">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </form>
      <div>
        <a
          type="signup"
          className="btn btn-primary a-signupBtn"
          href="/a-profile"
          onClick={onSignUp}
        >
          Sign up as Artist
        </a>
        <a
          type="signup"
          className="btn btn-primary e-signupBtn"
          href="/e-profile"
          onClick={onSignUp}
        >
          Sign up as Employer
        </a>
      </div>
    </div>
  );
}
