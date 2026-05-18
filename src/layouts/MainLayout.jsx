import { Outlet } from "react-router";
import SearchBar from '../components/SearchBar.jsx'
function MainLayout({search, searchHandler, clickHandler}) {
    return (
        <>
            <SearchBar
                search={search}
                searchHandler={searchHandler}
                clickHandler={clickHandler}
            />

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;