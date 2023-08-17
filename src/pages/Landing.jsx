import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/home");
  }
  return (
    <Row className="align-items-center">
      <Col></Col>
      <Col lg={6}>
        <h1>Welcome To Video-app</h1>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quas
          maxime omnis vero quo! Similique repellendus dolores nemo? Error
          quaerat quas tempora vitae corporis consequuntur facere ex reiciendis
          illum modi.
        </p>
        <button onClick={handleNavigate} className="btn btn-success">
          Click here to know more..!!
        </button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img
          width={"650px"}
          height={"500px"}
          src="https://cdn.dribbble.com/users/2308320/screenshots/12389768/media/cbad667fa40fcc33091ff4bb449f8206.gif"
          alt=""
        />
      </Col>
    </Row>
  );
}

export default Landing;
