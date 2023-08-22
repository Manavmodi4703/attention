import React, { useState } from 'react'
import Wrapper from './style'
import { services } from '../../services'

const Login = ({setLoggedInUser}) => {

    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) =>{
        services.user.login({
            contact, password
        })
        .then(res => {
            console.log(res.data)
            if(res.data?.bsuccess){
                setLoggedInUser(res.data)
            }
        })
        .catch(console.log)
        .finally(_ => {
            setContact("")
            setPassword("")
        })
    }


  return (
    <Wrapper>
        <div className="inner">
            <input type="text" placeholder='Contact *' value={contact} onChange={e => setContact(e.target.value)} />
            <input type="password" placeholder='Password *' value={password} onChange={e => setPassword(e.target.value)} />
            <input className='primary' type="button" value="Login" onClick={login} />
        </div>
    </Wrapper>
  )
}

export default Login
