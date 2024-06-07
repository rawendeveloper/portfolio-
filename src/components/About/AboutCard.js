import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rawen Ayedi </span>
            from <span className="purple"> Gafsa, Tunisia.</span>
            <br />
            Passionate about technology and creativity, I'm an ambitious and enthusiastic student specializing in Computer Systems Engineering & Internet of Things.            <br />
            I am a multidimensional individual with a wide array of interests 
            (IoT, Web, Certified testing ISTQB, UML design, Networking, Hardware and robotics, Database management, AI & ML)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech and Art Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Design
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Study the science of art. Study the art of science. Develop your senses — especially learn how to see. Realize that everything connects to everything else."{" "}
          </p>
          <footer className="blockquote-footer">Leonardo da Vinci</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
