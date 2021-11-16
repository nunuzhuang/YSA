import { Navbar, Container, Nav, FormCheck, FormFile } from "react-bootstrap";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import Select, { ActionMeta, OnChangeValue, StylesConfig } from "react-select";
import { useState } from "react";

const specializationsOptions = [
  { value: "drawing", label: "drawing" },
  { value: "water color painting", label: "water color painting" }
];

export default function ArtistProfile() {
  const auth = getAuth();
  const [skills, setSkills] = useState([]);

  function writeUserData(hasDrawingSkill) {
    const db = getDatabase();
    if (auth && auth.currentUser && auth.currentUser.uid) {
      const uid = auth.currentUser.uid;
      set(ref(db, "users/" + uid), {
        contains_drawing: hasDrawingSkill
      });
    }
  }

  const onChange = (value, actionMeta) => {
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        break;
    }
    setSkills(value);
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
      <div className="uploadSample">
        <div className="specials">
          <div>Select specializations:</div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={writeUserData(true)}
            />
            <label class="form-check-label">drawing</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">watercolor painting</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">acrylic painting</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">oil painting</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">sculpture</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">ceramics</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">printmaking</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">photography</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">film</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">animation</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">illustration</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label">design</label>
          </div>

          <Select
            value={skills}
            isMulti
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={onChange}
            options={specializationsOptions}
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Upload sample work
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <input class="form-control" type="file" id="formFile" />
        </div>
      </div>
    </div>
  );
}
