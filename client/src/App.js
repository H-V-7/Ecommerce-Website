import './App.css';
import Header from "./components/header/Header"
import Home from './components/home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DataProvider  from './context/DataProvider';
import DetailView from './components/details/DetailView';


function App() {
  return (
    <>  
      <DataProvider>
        <BrowserRouter>
          <Header />
          <div style={{marginTop:80}}>
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path='/product/:id' element={<DetailView />}/>
          </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>
        
  </>
  );
}

export default App;
