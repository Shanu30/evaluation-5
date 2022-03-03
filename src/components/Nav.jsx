import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./nav.module.css"

const Navbar = () => {
  const navigate = useNavigate();
  
  const [login ,setLog]  = useState(true);
  const handleClick = () =>{
    setLog(false);
    navigate("/login")
  }

  return (
    <div style={{margin:"20px"}}>
       
      <a className={styles.nav} href="/">Home</a>
      {
        login ? <button onClick={handleClick}>Login</button> : <div></div>
      }
      
     </div>
  )
}

export default Navbar