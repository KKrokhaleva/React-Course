import "./ErrorPage.css"
import {Link} from "react-router-dom";

export function ErrorPage() {
    return (
        <div className='home-container'>
            <h1 className='error-header'>Error (:</h1>
          <p className='error-description'>Return to <Link to="/">Home Page!</Link></p>
        </div>
    )
}