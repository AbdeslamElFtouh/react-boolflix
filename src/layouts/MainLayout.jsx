import { Outlet } from "react-router";
import SearchBar from '../components/SearchBar.jsx'

function MainLayout({search, searchHandler, allFictionsHandler}) {
    return (
        <>
            <SearchBar
                search={search}
                searchHandler={searchHandler}
                allFictionsHandler={allFictionsHandler}
            />

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;