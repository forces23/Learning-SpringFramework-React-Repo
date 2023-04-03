import { Link } from "react-router-dom"

export default function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        {/* a would be better used for a n external link */}
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">Forces23</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {/* Link would best be used for interal link */}
                                <li className="nav-item"> <Link className="nav-link" to="/welcome/forces23">Home</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" to="/listTodos">Todos</Link> </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="/logout">Logout</Link> </li>
                        </ul>
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}