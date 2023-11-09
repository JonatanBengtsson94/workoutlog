function Header() {
    return (
        <header>
        <nav className="header-nav">
            <h1 className="main-title">Workout Logger</h1>
            <ul className="nav-items">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item"><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header