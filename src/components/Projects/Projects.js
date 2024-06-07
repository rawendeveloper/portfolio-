import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png"; // Import the editor image
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Employee Management CRUD Application"
              description="This Laravel-based employee management app offers a user-friendly interface for adding, editing, and displaying employee information. It features robust CRUD operations, an optimized database structure using migrations, efficient data display with pagination, and integrated charts for visualizing business statistics and performance analysis."
              ghLink="https://github.com/rawendeveloper/CRUD-LARAVE-APP"
              demoLink="https://drive.google.com/file/d/1rCqICUv6HalVipXBa7P-M1e8gQfYcYvI/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SQL & Python Gender Data Analysis Report"
              description="My Contribution to a course organized by TechChange organization about Gender Data Inequality "
              ghLink="https://github.com/rawendeveloper/Gender-Data-100"
              demoLink="https://drive.google.com/file/d/1WZIwkNHzqYAMggK6nTGMakCOfeh9PTJO/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Breast Cancer Classifier"
              description="Implementing a simple machine learning algorithm in Python using Scikit-learn with a database of breast cancer tumor information, using a Naive Bayes (NB) classifier that predicts whether or not a tumor is malignant or benign."
              ghLink="https://github.com/rawendeveloper/breast_cancer_classifier/tree/main"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Arduino Temperature & Humidity Sensor Predictor"
              description="Using Tinkercad I simulated and coded a system that predicts Temperature & Humidity while sending messages to the user."
              ghLink="https://github.com/rawendeveloper/temperature-humidity-sensor"
              demoLink="https://www.tinkercad.com/things/h35gXVYQEeU-systeme-de-surveillance-dhumdite-de-sol-et-de-temperature-"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Neural Network to Recognize Handwritten Digits with TensorFlow"
              description="Building a Neural Network to Recognize Handwritten Digits with TensorFlow"
              ghLink="https://github.com/rawendeveloper/-Handwritten-digit-recognition-with-CNNs/tree/main"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Parking management application"
              description="Simple Project for Parking Management using C language and pointers"
              ghLink="https://github.com/rawendeveloper/Projet_parking"
              demoLink="https://github.com/rawendeveloper/Projet_parking"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
