import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md Kaif Ali </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I'm a passionate and results-driven software engineer with a strong foundation in both front-end and back-end development.
            <br/>
            My journey began with a <span className="purple">B.Tech</span> in Mechanical Engineering from <span className="purple">Jamia Millia Islamia</span>, where I honed my analytical and problem-solving skills. 
            <br/>
            My hunger for coding led me to explore the world of software, and since then, I've been building innovative solutions and optimizing user experiences with each line of code.

            My professional career started at <span className="purple">10xOkr</span>, where I transitioned from a Front-End Developer Intern to a Software Engineer.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dream with purpose, build with passion, leave a legacy of starlight"{" "}
          </p>
          <footer className="blockquote-footer">mknazir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
