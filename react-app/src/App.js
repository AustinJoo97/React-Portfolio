import { BrowserRouter as Router, Route } from 'react-router-dom';


import NavBarHeader from './components/navBar';
import Projects from './components/projects';
import Contacts from './components/contacts';
import AboutMe from './components/aboutMe';

function App() {
  return (
      <div className="app">
        <Router>

          {/* <Header /> */}
          
          <NavBarHeader />

          <div id="mainWrapper">
            <div id="banner">
              <div id='mainComponent'>

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
