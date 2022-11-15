import { Col } from "react-bootstrap";
import navIcon2 from '../assets/img/nav-icon2.svg';
import github2 from '../assets/img/github.png';
import rocket from '../assets/img/rocket.png';
import videopng from '../assets/img/video.png';

export const ProjectCard = ({ title, description, imgUrl, deploy, github, video }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <div>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          <div className="social-icon mt-3">
            {deploy ? <a className="projecto-card-icon" href={deploy} target={"_blank"}><img src={rocket} alt="" /></a> : null}
            {github ? <a className="projecto-card-icon" href={github} target={"_blank"}><img src={github2} alt="" /></a> : null}
            {video ? <a className="projecto-card-icon" href={video} target={"_blank"}><img src={videopng} alt="" /></a> : null}
          </div>
        </div>

      </div>
    </Col>
  )
} 
