import { Container } from "react-bootstrap";
import "./About.css";
import colorSharp2 from "../Images/color-sharp2.png";

export const About = () => {
  return (
    <section className="project" id="Projects">
      <Container>
      <h2>About</h2>
        <p>
          Hi  I am
          Narasimman, a passionate Front end java Developer with a
          strong foundation in Core Java. My goal is to create immersive and
          user-friendly web experiences with the users. With expertise in
          HTML, CSS,JavaScript,Reactjs and Eager to contribute my passion and
          expertise to innovative projects and grow professionally with
          experienced mentors.
        </p>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
