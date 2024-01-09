import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import socialMedia from "../../Assets/Projects/socialMedia.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMedia}
              isBlog={false}
              title="Social Media"
              description="Revolutionize your social experience with our ReactJS-powered platform. Boasting Cloudinary integration for multimedia optimization and Socket.io for real-time chat, enjoy a secure and dynamic space with JWT-powered authentication and MongoDB-backed infrastructure."
              ghLink="https://github.com/mknazir/socialmediaapp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
