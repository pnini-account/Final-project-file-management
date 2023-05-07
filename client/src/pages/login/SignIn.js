import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [unauthorized, setUnauthorized] = useState(false);
    const [err, setErr] = useState();
    const [ok, setOk] = useState(false);

    const useEffec = (() => {
        if (err == "" ) {
            setOk(true);
        }
    }, [err])

    const SignIn = async() =>{
            const response = await fetch("http://localhost:3600/api/auth/login",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({name:userName,password:pwd})
            })                

                if(response.ok){
                    const data = await response.json();
                    const token = data.accessToken;
                    sessionStorage.setItem("token", token);
                    //navigate('/')
                    navigate('/categories')

                }
                else {
                    setUnauthorized(true);
                    const err = await response.json();
                    setErr(err.message);
                    console.log(err.message)
                }

    }
  return (
    <div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" onChange={(e)=>{setUserName(e.target.value)}}/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" onChange={(e)=>{setPwd(e.target.value)}}/>
                </div>               
				<div className="group">
					<input id="check" type="checkbox" className="check" defaultChecked/>
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>               
				<div className="group">
					<input type="submit" className="button" value="Sign In" onClick={SignIn}/>
				</div>
                {err && <><span style={{ color: 'red' }}>{err}</span><br /><br /></>}
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
  )
}

export default SignIn;