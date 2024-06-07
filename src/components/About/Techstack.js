import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPython, FaDatabase, FaFileCode, FaFileExcel, FaChartLine, FaRobot, FaLaptopCode, FaServer, FaLinux, FaWindows, FaJava, FaJs, FaGithub, FaGit, FaAndroid, FaFigma, FaFileAlt, FaCss3Alt, FaHtml5, FaLaravel, FaPhp, FaNodeJs, FaNpm, FaVuejs, FaBootstrap, FaWordpress, FaAngular } from "react-icons/fa";
import { SiArduino} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaptopCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaNpm />
      </Col>


    </Row>
  );
}

export default Techstack;
