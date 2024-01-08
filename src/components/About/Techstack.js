import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiMysql
} from "react-icons/di";
import {
  SiNextdotjs,
  SiWordpress,
  SiWix,
  SiExpress,
  SiRedux,
  SiHtml5,
  SiTailwindcss
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h4>NextJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>ReactJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>NodeJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h4>ExpressJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>MongoDB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h4>Redux</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h4>HTML5</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h4>Tailwindcss</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h4>C++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h4>MySQL</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <h4>Wordpress</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWix />
        <h4>WIX</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Github</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
