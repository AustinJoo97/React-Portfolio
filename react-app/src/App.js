import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './components/header';
import NavBar from './components/navBar';
import Welcome from './components/welcome';
import Projects from './components/projects';
import Contacts from './components/contacts';
import AboutMe from './components/aboutMe';

function App() {
  return (
      <div className="app">
        {/* Consider adding a welcome page that will load "Hello, my name is Austin Joo" at root enpoint with other endpoints going directly to main page with navbar and other main content */}
        <Router>

          {/* <Header /> */}
          
          <NavBar />

          <div id="mainWrapper">
            <div id="banner">
              <div id='mainComponent'>

                {/* <Route exact path="/aboutMe">
                  <Welcome />
                </Route> */}

                <Route exact path="/aboutMe">
                  <AboutMe />
                </Route>

                <Route exact path="/projects">
                  <Projects />
                </Route>

                <Route exact path="/contactMe">
                  <Contacts />
                </Route>

              </div>
              <h4 id='sig'>&copy; Takashi Murakami</h4>
            </div>
          </div>

        </Router>
      </div>
  )
}

export default App;
