import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginComponent(){
    const [username, setUsername] = useState('forces23')
    const [password, setPassword] = useState('')
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
        //console.log(password)
    }

    function handleCredCheck(){
        if (username==='forces23' && password==='dummy'){
            console.log('success')
            setShowSuccessMsg(true)
            setShowErrorMsg(false)
            navigate(`/welcome/${username}`)
        }
        else{
            console.log('failed')
            setShowErrorMsg(true)
            setShowSuccessMsg(false)
        }
        console.log(username)
        console.log(password)
    }


    return (
        <div className="Login">
            <div className="LoginForm">
                <h1>Time To Login</h1>
                {/* <form className="LoginFormData"> */}
                    {showSuccessMsg && <div className="sucessMessage">Authentication Successful</div>}
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