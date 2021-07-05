import './css/App.css';

function App() {
  // Set states here

  return (
    <div className="app">
      <header className="appHeader">
        <p>
          This is the header's placeholder text
        </p>
      </header>
      
      <nav>
            <div id="myName">
                <h1>Austin Joo</h1>
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
        {/* Nav bar and name */}
    </div>
  );
}

export default App;
