export default function NavBar(){
    return (
        <nav>
              <div id="nameTag">
                  <h1>
                    <a id='myName' href='/'>Austin Joo</a>
                  </h1>
              </div>

              <select id="navDropdown">
                  <option selected="selected">Select</option>

                  <option id='aboutMeOption'>About Me</option>
                  <option id='projectsOption'>Projects</option>
                  <option id='contactMeOption'>Contact Me</option>
              </select>

              <div id="navDirectory">
                  <ul>
                      <li class="links">
                          <a id='aboutMeButton' href='/aboutMe'>About Me</a>
                      </li>
                      <li class="links">
                          <a id='projectsButton' href='/projects'>Projects</a>
                      </li>
                      <li class="links">
                          <a id='contactMeButton' href='/contactMe'>Contact Me</a>
                      </li>
                  </ul>
              </div>
          </nav>
    )
}