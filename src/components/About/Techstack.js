import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h4>C++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>NodeJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>ReactJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>MongoDB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h4>NextJS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Github</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
