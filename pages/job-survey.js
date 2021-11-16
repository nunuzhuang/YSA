import { Navbar, Container, Nav, FormCheck, FormFile } from "react-bootstrap";
//import Select, { ActionMeta, OnChangeValue, StylesConfig } from "react-select";
export default function JobSurvey() {
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
      Create a job posting
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <label for="floatingTextarea2">job overview</label>
      </div>
      <div class="input-group">
        <span class="input-group-text">deadline</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div class="input-group">
        <span class="input-group-text">payment</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          upload files
        </label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div class="mb-3">
        <input class="form-control" type="file" id="formFile" />
      </div>
    </div>
  );
}
