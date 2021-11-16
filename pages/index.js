import { Navbar, Container, Nav } from "react-bootstrap";
export default function IndexPage() {
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

      <div className="homeQ">
        <span className="question">Are you an Artist or Employer?</span>
        <div className="questionBtn">
          <a className="btn btn-primary questionBtn" href="login" role="button">
            Artist
          </a>
          <a className="btn btn-primary questionBtn" href="login" role="button">
            Employer
          </a>
        </div>
      </div>
    </div>
  );
}
