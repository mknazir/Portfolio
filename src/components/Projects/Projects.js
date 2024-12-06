import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TrainingPortal from "../../Assets/Projects/TrainingPortal.png";
import TherapistPortal from "../../Assets/Projects/Therapist.png";

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
              imgPath={TrainingPortal}
              isBlog={false}
              title="Training Portal"
              description="Transform your learning experience with our ReactJS-powered platform. Featuring AWS S3 for media storage, Razorpay for seamless payments, and real-time engagement through meeting links, it ensures secure, scalable, and user-friendly interactions, backed by a robust Node.js and MongoDB infrastructure."
              ghLink="https://www.academy.sageturtle.in"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TherapistPortal}
              isBlog={false}
              title="Therapist Portal"
              description="Streamline therapy management with our comprehensive Therapist Portal. Featuring real-time appointment scheduling, session notes, referral management, and unique client histories, it empowers therapists to deliver personalized and seamless care backed by efficient scheduling and interaction tools."
              ghLink="https://covid-19-tracker-fc5dd.web.app/therapist"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
