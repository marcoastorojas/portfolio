import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import food2 from "../assets/img/food2.jpeg";
import food from "../assets/img/food.jpeg";
import alkemy from "../assets/img/alkemy.jpeg";
import ecommerce from "../assets/img/ecommerce.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import placeholder from "../assets/img/placeholder.png"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Plus Hardware",
      description: "Proyecto full stack ecommerce soy henry React, Nodejs, crum, Git, React, Postgresql, Nodejs, Express",
      imgUrl: ecommerce,
      github: "https://github.com/marcoastorojas/pf-ecommerce",
      deploy: "https://pf-ecommerce.onrender.com/",
      video: "https://www.youtube.com/watch?v=75p9ft-uoWw"
    },
    {
      title: "Billetera Digital",
      description: "Proyecto Alkemy  Frontend aplicacion Billetera Digital uso de Reactive Forms, Guards, Graficas, etc",
      imgUrl: alkemy,
      deploy: "https://skillup-alkemy.netlify.app",
      github: "https://github.com/marcoastorojas/Skill-Up-Angular",
      video: "https://drive.google.com/file/d/1dTtbFIHNy2lcSYKZhNTNDh6nU9JwMdqK/view"
    },
    {
      title: "FoodApp",
      description: "Proyecto individual FullStack (Nodejs,React), aplicacion para obtener recetas de platos segun sus dietas, healtScore y tiempos de preparacion.",
      imgUrl: food,
      github: "https://github.com/marcoastorojas/food",
      deploy: "https://app-food-henry.onrender.com/",
      video: ""
    },
    {
      title: "A la carta",
      description: "Aplicacion Angular para elegir un menu y ver sus caracteristicas, promedios, etc",
      imgUrl: food2,
      deploy: "https://alkemy-alacarta.netlify.app/",
      github: "https://github.com/marcoastorojas/a-la-carta",
      video: ""
    },
    {
      title: "MovieApp",
      description: "Proyecto personal FullStack (Nodejs,Angular), Aplicacion de streaming de peliculas y series, en progreso...",
      imgUrl: placeholder,
      github: "https://github.com/marcoastorojas/movieApp",
      deploy: "",
      video: ""
    },
    {
      title: "HospitalApp",
      description: "Proyecto personal en progreso...",
      imgUrl: placeholder,
      github: "https://github.com/marcoastorojas/app-hospital.github.io",
      deploy: "",
      video: ""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
