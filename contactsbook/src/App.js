import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ContactsBook} from "./ContactsBookModule/ContactsBook";
import {HomePage} from "./HomePage/HomePage";
import {Todo} from "./TodoModule/Todo";
import {ErrorPage} from "./ErrorPage/ErrorPage";

function App() {
    return (
        <Router>
            <Switch>

                <Route path='/' exact component={HomePage}/>
                <Route path='/contacts' component={ContactsBook}/>
                <Route path='/todo' component={Todo}/>
                <Route path='*' component={ErrorPage}/>

            </Switch>
        </Router>
    );
}

export default App;
