import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import NavBarHeader from './components/navBar';
import Projects from './components/projects';
import Contacts from './components/contacts';
import AboutMe from './components/aboutMe';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  return (
      <div className="app" style={{width: '100%', height: '100%'}}>
        <Router basename={process.env.PUBLIC_URL}>

          <NavBarHeader />

          <div id="mainWrapper">
            <div id="banner">
              <div id='mainComponent'>

              <Switch>

                <Route exact path="/projects">
                  <Projects />
                </Route>

                <Route exact path="/contactMe">
                  <Contacts />
                </Route>

                <Route exact path="/resume">
                  <Resume />
                </Route>

                <Route exact path="/">
                  <AboutMe />
                </Route>

                <Route >
                  <AboutMe />
                </Route>
          
              </Switch>

              </div>
              <Footer />
              <h4 id='sig'>&copy; Takashi Murakami</h4>
            </div>
          </div>


        </Router>
      </div>
  )
}

export default App;
