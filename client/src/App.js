import './App.css';
import Header from "./components/header/Header"
import Home from './components/home/Home';

import DataProvider from './context/DataProvider';


function App() {
  return (
    <>  
      <DataProvider>
        <Header />
        <div style={{marginTop:80}}>
          <Home />
        </div>
      </DataProvider>
        
  </>
  );
}

export default App;
