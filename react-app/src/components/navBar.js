import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBarHeader({ history }){

    return (
        <nav>
            <div id="nameTag">
                <Link className="links" id='myName' to="/aboutMe">
                    <h1>Austin Joo</h1>
                </Link>
            </div>

            <select id="navDropdown" onChange={(e) => {
                history.push(`${e.target.value}`);
            }}>
                <option id='aboutMeOption' value='/aboutMe'>About Me</option>
                <option id='projectsOption' value='/projects'>Projects</option>
                <option id='contactMeOption' value='/contactMe'>Contact Me</option>
                <option id='resumeOption' value='/resume'>Resume</option>
            </select>

            <div id="navDirectory">
                <Link className="links navLinks" id='aboutMeButton' to='/aboutMe'>
                    <h4>About Me</h4>
                </Link>

                <Link className="links navLinks" id='projectsButton' to='/projects'>
                    <h4>Projects</h4>
                </Link>

                <Link className="links navLinks" id='contactMeButton' to="/contactMe">
                    <h4>Contact Me</h4>
                </Link>

                <Link className="links navLinks" id='resumeButton' to="/resume">
                    <h4>Resume</h4>
                </Link>
            </div>
          </nav>
    )
}

export default withRouter(NavBarHeader)