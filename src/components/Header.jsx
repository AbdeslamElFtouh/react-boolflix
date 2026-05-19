import { NavLink } from "react-router";
import SearchBar from './SearchBar.jsx'
import styles from './Header.module.css';

function Header({ search, searchHandler, allFictionsHandler }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div className="container">
                    <img
                        src='LogoBoolflix.jpg'
                        alt='Logo'
                        className={styles.logo}
                    />

                    <NavLink className="navbar-brand fw-semibold" to="/">BOOLFLIX</NavLink>

                    <SearchBar
                        search={search}
                        searchHandler={searchHandler}
                        allFictionsHandler={allFictionsHandler}
                    />


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
