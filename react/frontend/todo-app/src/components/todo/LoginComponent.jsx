import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent(){
    const [username, setUsername] = useState('forces23')
    const [password, setPassword] = useState('')
    const authContext = useAuth()
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleCredCheck(){
        
        if (authContext.login(username,password)){
            console.log('login : success')
            navigate(`/welcome/${username}`)
        }
        else{
            console.log('login : failed')
        }

    }


    return (
        <div className="Login">
            <div className="LoginForm">
                <h1>Time To Login</h1>
                {/* <form className="LoginFormData"> */}
                    {showErrorMsg && <div className="errorMessage">Authentication Failed. Username or password is inccorrect</div>}
                    <div>
                        <label>User Name: </label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div>
                        <button name="loginButton" onClick={handleCredCheck}>Login</button>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}