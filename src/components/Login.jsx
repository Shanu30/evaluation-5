import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [value, setValue] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleClick = () =>{
      navigate(`/user`)
    }

  

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="write your username"
        name="username"
      />
      <br />
      <br />
    
      <label>Password</label>
      <input
        type="text"
        value={password}
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
     <br />
     <button onClick={handleClick}>Submit</button>
      
    </div>
  );
};

export default Login