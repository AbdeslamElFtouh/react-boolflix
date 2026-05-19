import { Outlet } from "react-router";
import Header from '../components/Header.jsx'

function MainLayout({search, searchHandler, allFictionsHandler}) {
    return (
        <>
            <Header
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