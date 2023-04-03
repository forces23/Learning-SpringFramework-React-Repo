import { useParams, useNavigate, Link } from "react-router-dom"

export default function WelcomeComponent(){
    const {username} = useParams()
    const navigate = useNavigate();
    
    console.log(username)

    function handleMangeTodosButton(){
        navigate('/listTodos')
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                <div>
                    <Link to="/listTodos">Manage todos</Link> using Link tag
                </div>
                <button name="manageTodos" onClick={handleMangeTodosButton}>Manage Todos using button</button>
            </div>
            
        </div>
    )
}