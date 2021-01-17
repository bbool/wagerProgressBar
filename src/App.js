import lucky8 from './lucky8.svg';
import casinoextra from './casino-extra.svg';
import fatboss from './fatboss.png';
import stake from './stake.svg';
import tortuga from './tortuga.png';
import 'tailwindcss/tailwind.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="containerLogos" className="flex container">
          <div className="grid gap-5 grid-cols-5 place-content-center">
            <div className="flex justify-center items-center">
              <a href="#">
                <img src={lucky8} className="casino-logo" alt="logo" />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="#">
                <img src={casinoextra} className="casino-logo" alt="logo" />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="#">
                <img src={fatboss} className="casino-logo" alt="logo" />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="#">
                <img src={stake} className="casino-logo" alt="logo" />
              </a>
            </div>
            <div className="flex justify-center items-center">
              <a href="#">
                <img src={tortuga} className="casino-logo" alt="logo" />
              </a>
            </div>
          </div>
        </div>
        <br />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
