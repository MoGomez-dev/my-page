import './App.css';
import { useState } from 'react';
import { Home } from './components/Home';
import { Works } from './components/Works';
import { Works2 } from './components/Works2';
import { Contact } from './components/Contact';
import { Header } from './components/Header';



function App() {
  const [handleComponentPC,setHandleComponentPC] = useState("home");
    const mainComponent = () => {
        switch(handleComponentPC){
          case "home" : 
            return <Home />
          case "work1" : 
            return <Works />
          case "work2" : 
            return <Works2 />
          case "contact" : 
            return <Contact />
          default: return <Home />
        }
      }
  return (
    <div>
        <Header setHandleComponentPC={setHandleComponentPC} />
        {mainComponent()}
    </div>
  )
}

export default App;
