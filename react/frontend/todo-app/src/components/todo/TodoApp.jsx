import './TodoApp.css'
import {useState} from 'react'

export default function TodoApp(){
    return(
        <div className="todoApp">
            Todo Management Application 
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent(){
    const [username, setUsername] = useState('forces23')
    const [password, setPassword] = useState('')
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    const [showFailedMsg, setShowFailedMsg] = useState(false)

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
            setShowFailedMsg(false)
        }
        else{
            console.log('failed')
            setShowFailedMsg(true)
            setShowSuccessMsg(false)
        }
        console.log(username)
        console.log(password)
    }

    function ShowSucessMessageComponent(){
        
            if(showSuccessMsg){
                return(
                    <div className="sucessMessage">Authentication Successful</div>
                    )
            }
    }

    function ShowFailedMessageComponent(){
        
        if(showFailedMsg){
            return(
                <div className="failedMessage">Authentication Failed. Username or password is inccorrect</div>
                )
        }
}


    return (
        <div className="Login">

            {/* 
            <div className="errorMessage">{showFailedMsg}</div> */}
            <div className="LoginForm">
                {/* <form className="LoginFormData"> */}
                    <ShowSucessMessageComponent/>
                    <ShowFailedMessageComponent/>
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

function WelcomeComponent(){
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}