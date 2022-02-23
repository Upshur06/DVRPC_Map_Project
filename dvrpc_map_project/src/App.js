import './App.css';
import { MyMap } from './components/MyMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Indicators of Potential Disadvantage (IPD)</h1>
      </header>

      <MyMap />

      <footer>
        <p>
          data provided by DVRPC, 2019 Indicators of PotentialDisadvantage and links to: 
        
        <a
          className="App-link"
          href="https://dvrpc-dvrpcgis.opendata.arcgis.com/datasets/greater- philadelphia-tract-level-indicators-of-potential-disadvantage-ipd-2019/explore"
          target="_blank"
          rel="noopener noreferrer"
        >
           https://dvrpc-dvrpcgis.opendata.arcgis.com/datasets/greater- philadelphia-tract-level-indicators-of-potential-disadvantage-ipd-2019/explore
        </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
