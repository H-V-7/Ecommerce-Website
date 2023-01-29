import './App.css';

import Header from "./components/header/Header"
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header />
    <div style={{marginTop:80}}>
      <Home />
    </div>
  </div>
  );
}

export default App;
