import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

export default function NavBarHeader(props){

    return (
        <nav>
            <div id="nameTag">
                <Link className="links" id='myName' to="/aboutMe">
                    <h1>Austin Joo</h1>
                </Link>
            </div>

            <select id="navDropdown">
                <option defaultValue="selected">Select</option>

                <option id='aboutMeOption'>About Me</option>
                <option id='projectsOption'>Projects</option>
                <option id='contactMeOption'>Contact Me</option>
            </select>

            {/* <Dropdown>
              <DropdownMenu>
                <DropdownItem href="/aboutMe">About Me</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}

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