import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailchimp,
  FaWhatsapp
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function ConnectMe() {
  const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;
  const handleIconClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", height:'63vh' }}>
      <Col xs={4} md={3} className="tech-icons contactCard" onClick={() => handleIconClick("https://wa.me/+919155338080")}>
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("Connect on WhatsApp")}
        >
          <div>
            <FaWhatsapp />
            <h4>WhatsApp</h4>
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={3} className="tech-icons contactCard" onClick={() => handleIconClick("mailto:mdkaifali17317@gmail.com")}>
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("Send an email")}
        >
          <div>
            <FiMail />
            <h4>Gmail</h4>
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={3} className="tech-icons contactCard" onClick={() => handleIconClick("https://www.instagram.com/mknazir7/")}>
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("Follow on Instagram")}
        >
          <div>
            <FaInstagram />
            <h4>Instagram</h4>
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={3} className="tech-icons contactCard" onClick={() => handleIconClick("https://github.com/mknazir")}>
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("View on Github")}
        >
          <div>
            <FaGithub />
            <h4>Github</h4>
          </div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={3} className="tech-icons contactCard" onClick={() => handleIconClick("https://www.linkedin.com/in/mknazir7/")}>
        <OverlayTrigger
          placement="bottom"
          overlay={renderTooltip("Connect on LinkedIn")}
        >
          <div>
            <FaLinkedin />
            <h4>Linkedin</h4>
          </div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default ConnectMe;