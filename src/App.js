import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>Users Page</Link>
                <Link to={'/posts'}>Posts Page</Link>
                <Link to={'/comments'}>Comments Page</Link>

            </div>
        </Router>
    )
}