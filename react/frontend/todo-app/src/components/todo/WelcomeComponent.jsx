import { useParams, useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import { retrieveHellowWorldBean } from "./api/HelloWorldApiService";


export default function WelcomeComponent(){
    const {username} = useParams()
    const navigate = useNavigate();
    const [message, setmessage] = useState(null)

    function callHelloWorldRestApi(){
        // console.log("called hello world")
        // axios.get('http://localhost:8080/hello-world/')
        // .then( (response) => successfulResponse(response) )
        // .catch( (error) => errorResponse(error) )
        // .finally( () => console.log("cleanup") )

        console.log("called hellow world - bean")
        retrieveHellowWorldBean()
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log("cleanup") )
    }

    function successfulResponse(response){
        console.log(response)
        //setmessage(response.data)
        setmessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

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
                <button className="btn btn-success m-2" name="manageTodos" onClick={handleMangeTodosButton}>Manage Todos using button</button>
                <button className="btn btn-success m-2" name="api" onClick={callHelloWorldRestApi}>Call Hello World API</button>
                <div className="text-info">{message}</div>
            </div>
            
        </div>
    )
}