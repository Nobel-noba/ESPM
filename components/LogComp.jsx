import React from 'react';
import Link from 'next/link';
import Router  from 'next/router';


const LogComp = ({li,setIsloggedIn}) => {
    if(li === "loggedin"){
        return <button className='btn btn-outline-danger' onClick={() => {setIsloggedIn("loggedout");Router.push("./")}}>Logout</button>
    }else if( li === "loggedout"){
        return <Link href="./signup"><button className='btn btn-outline-light'  >SignUp</button></Link>
    }else{
        return <Link href="./"><button className='btn btn-outline-light'  >Signin</button></Link>
    }
  return <div></div>;
};

export default LogComp;
