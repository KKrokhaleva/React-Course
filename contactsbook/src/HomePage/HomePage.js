import "./HomePage.css"
import {Link} from "react-router-dom";

export function HomePage() {
    return (
        <div className='home-container'>
            <h1>Home Page</h1>
            <div className='container'>
                <div className='contact-book'>
                    <h3>Contact Book</h3>
                    <p>A contact list is a collection of screen names. It is a commonplace feature of instant messaging,
                        Email clients, online games and mobile phones. It has various trademarked and proprietary names
                        in different contexts.If you want go to app <Link to="/contacts">Click here!</Link></p>
                </div>

                <div className='todo-app'>
                    <h3>Todo List</h3>
                    <p>A list of tasks that need to be completed, typically organized in order of priority. If you want
                        go to app <Link to="/todo">Click here!</Link></p>
                </div>
            </div>
        </div>
    )
}