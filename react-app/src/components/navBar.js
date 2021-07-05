export default function NavBar(props){

    return (
        <nav>
              <div id="nameTag">
                  <h1>
                    <a id='myName' href="/#" onClick={props.changePath}>Austin Joo</a>
                  </h1>
              </div>

              <select id="navDropdown">
                  <option defaultValue="selected">Select</option>

                  <option id='aboutMeOption'>About Me</option>
                  <option id='projectsOption'>Projects</option>
                  <option id='contactMeOption'>Contact Me</option>
              </select>

              <div id="navDirectory">
                  <ul>
                      <li className="links">
                          <a id='aboutMeButton' href="/#" onClick={props.changePath}>About Me</a>
                      </li>
                      <li className="links">
                          <a id='projectsButton' href="/#" onClick={props.changePath}>Projects</a>
                      </li>
                      <li className="links">
                          <a id='contactMeButton' href="/#" onClick={props.changePath}>Contact Me</a>
                      </li>
                  </ul>
              </div>
          </nav>
    )
}