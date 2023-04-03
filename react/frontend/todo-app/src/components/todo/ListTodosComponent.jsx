export default function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, description: 'Learn React', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn DevOps', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn AWS', done: false, targetDate: targetDate}
    ]

    return(
        <div className="container">
            <h1>Things I want To Do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )

}