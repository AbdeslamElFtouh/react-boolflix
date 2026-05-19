import { Outlet } from "react-router";
import SearchBar from '../components/SearchBar.jsx'

function MainLayout({search, searchHandler, fetchAllFictionsHandler}) {
    return (
        <>
            <SearchBar
                search={search}
                searchHandler={searchHandler}
                fetchAllFictionsHandler={fetchAllFictionsHandler}
            />

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;