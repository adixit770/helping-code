import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

export default function Welcome() {
    const values = React.useContext(userContext);
    const history=useNavigate();
    const {  login, setLogin } = values;
    console.log(login);
    useEffect(() => {
    if (!login){
         history("/cv");
    }
    },[])
    
  return (
    <div><h1>WELCOME </h1></div>
  )
}
