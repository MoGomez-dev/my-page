import React, { useState } from 'react'
import { Home } from './Home';
import { Skills } from './Skills';
import { Works } from './Works';
import { Works2 } from './Works2';
import { Contact } from './Contact';
import { Header } from './Header';

export const PCSite = (props) => {
  const [handleComponentPC,setHandleComponentPC] = useState("home");
    const mainComponent = () => {
        switch(handleComponentPC){
          case "home" : 
            return <Home />
          case "skills" : 
            return <Skills />
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
    <div className='container'>
        <Header setHandleComponentPC={setHandleComponentPC} setMobile={props.setMobile} />
        {mainComponent()}
    </div>
  )
}
