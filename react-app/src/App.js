import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from "react";


import Header from './components/header';
import NavBar from './components/navBar';
import Welcome from './components/welcome';
import Projects from './components/projects';
import Contacts from './components/contacts';
import AboutMe from './components/aboutMe';

function App() {
  const [contentPath, setContentPath] = useState('/');

  const changePath = (pathChosen) => {
      setContentPath(pathChosen.target.id);
  }

  return (
      <div className="app">
        <Router>

          <Header />
          
          <NavBar 
          changePath={changePath}
          />

          <div id="mainWrapper">
            <div id="banner">
                <h4>&copy; Takashi Murakami</h4>
            </div>

            <Route exact path="/aboutMe">
              <Welcome />
            </Route>

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

        </Router>
      </div>
  )
}

export default App;
