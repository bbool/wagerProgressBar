import CasinoLogo from './components/CasinoLogo.js';

import 'tailwindcss/tailwind.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="containerLogos" className="flex container">
          <div className="grid gap-5 grid-cols-5 place-content-center">
            <div className="flex justify-center items-center">
              <CasinoLogo name="lucky8" extension="svg"/>
            </div>
            <div className="flex justify-center items-center">
              <CasinoLogo name="casino-extra" extension="svg"/>
            </div>
            <div className="flex justify-center items-center">
              <CasinoLogo name="fatboss" extension="png"/>
            </div>
            <div className="flex justify-center items-center">
              <CasinoLogo name="stake" extension="svg"/>
            </div>
            <div className="flex justify-center items-center">
              <CasinoLogo name="tortuga" extension="png"/>
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
