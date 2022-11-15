import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.jpeg";
import projImg2 from "../assets/img/project-2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Plus Hardware",
      description: "Proyecto full stack ecommerce soy henry React, Nodejs, crum, Git, React, Postgresql, Nodejs, Express",
      imgUrl: projImg2,
      github: "https://github.com/marcoastorojas/pf-ecommerce",
      deploy: "https://pf-ecommerce.onrender.com/",
      video: ""
    },
    {
      title: "Billetera Digital",
      description: "Proyecto Alkemy  Frontend aplicacion Billetera Digital uso de Reactive Forms, Guards, Graficas, etc",
      imgUrl: projImg1,
      deploy: "https://skillup-alkemy.netlify.app",
      github: "https://github.com/marcoastorojas/Skill-Up-Angular",
      video: "https://drive.google.com/file/d/1dTtbFIHNy2lcSYKZhNTNDh6nU9JwMdqK/view"
    },
    {
      title: "FoodApp",
      description: "Proyecto individual FullStack (Nodejs,React), aplicacion para obtener recetas de platos segun sus dietas, healtScore y tiempos de preparacion.",
      imgUrl: projImg3,
      github: "https://github.com/marcoastorojas/food",
      deploy: "https://app-food-henry.onrender.com/",
      video: ""
    },
    {
      title: "A la carta",
      description: "Aplicacion Angular para elegir un menu y ver sus caracteristicas, promedios, etc",
      imgUrl: projImg1,
      deploy: "https://alkemy-alacarta.netlify.app/",
      github: "https://github.com/marcoastorojas/a-la-carta",
      video: ""
    },
    {
      title: "MovieApp",
      description: "Proyecto personal FullStack (Nodejs,Angular), Aplicacion de streaming de peliculas y series, en progreso...",
      imgUrl: projImg3,
      github: "https://github.com/marcoastorojas/movieApp",
      deploy: "",
      video: ""
    },
    {
      title: "HospitalApp",
      description: "Proyecto Individual en progreso...",
      imgUrl: projImg3,
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
