import { Link } from 'react-router-dom';

export default function NavBar(props){

    return (
        <nav>
              <div id="nameTag">
                  <h1>
                    <a id='myName' href="/aboutMe" onClick='return false'>Austin Joo</a>
                  </h1>
              </div>

              <select id="navDropdown">
                  <option defaultValue="selected">Select</option>

                  <option id='aboutMeOption'>About Me</option>
                  <option id='projectsOption'>Projects</option>
                  <option id='contactMeOption'>Contact Me</option>
              </select>

              <div id="navDirectory">
                    <Link className="links" id='aboutMeButton' to='/aboutMe'>
                        <h4>About Me</h4>
                    </Link>
                    <Link className="links" id='projectsButton' to='/projects'>
                        <h4>Projects</h4>
                    </Link>
                    <Link className="links" id='contactMeButton' to="/contactMe">
                        <h4>Contact Me</h4>
                    </Link>
              </div>
          </nav>
    )
}