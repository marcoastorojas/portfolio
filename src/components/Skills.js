import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import mongo from "../assets/img/mongo.png";
import node from "../assets/img/node.png";
import postgresql from "../assets/img/postgresql.png";
import angular from "../assets/img/angular.png";
import git from "../assets/img/git.png";
import react from "../assets/img/react.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Algunas de las tecnologías que manejo y utilizo en mi dia a dia:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={angular} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Nodejs</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="Image" />
                                <h5>Postgresql</h5>
                            </div>
                            <div className="item">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
