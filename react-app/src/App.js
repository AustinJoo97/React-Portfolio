import Header from './components/header';
import NavBar from './components/navBar';
import MainContent from './components/mainContent';
import { useState } from "react";
// import './css/App.css';

function App() {
  // Set states here
  const [contentPath, setContentPath] = useState('/');

  const changePath = (pathChosen) => {
      setContentPath(pathChosen.target.id);
  }

  return (
      <div className="app">
        <Header />
        
        <NavBar 
        changePath={changePath}
        />


        <div id="mainWrapper">
          <div id="banner">
              <h4>&copy; Takashi Murakami</h4>
          </div>

          <MainContent 
          pathChosen={contentPath}
          />
        </div>
      </div>
  )
}

export default App;
