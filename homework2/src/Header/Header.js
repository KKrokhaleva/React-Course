import './Header.css';

function Header() {
    return (
        <div className="Container">
            <span>Logo</span>
            <ul>
                <li><a href="#">Main</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">About</a></li>
            </ul>

        </div>
    );
}

export default Header;