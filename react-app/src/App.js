import Header from './components/header';
import NavBar from './components/navBar';
import MainContent from './components/mainContent';
// import './css/App.css';

function App() {
  // Set states here

  return (
      <div className="app">
        <Header />
        
        <NavBar />


        <div id="mainWrapper">
          <div id="banner">
              <h4>&copy; Takashi Murakami</h4>
          </div>

          <MainContent />
        </div>
      </div>
  )
}

export default App;
