import { NavLink, Outlet } from "react-router";

export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                <NavLink
                    className="navbar-brand"
                    to="/" end>
                    Asociaciones
                </NavLink>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink
                            className={`nav-item nav-link ${({ isActive }) => isActive ? "active" : ""}`}
                            to="/marvel" end>
                            Marvel
                        </NavLink>

                        <NavLink
                            className={`nav-item nav-link ${({ isActive }) => isActive ? "active" : ""}`}
                            to="/dc">
                            DC
                        </NavLink>
                        <NavLink
                            className={`nav-item nav-link ${({ isActive }) => isActive ? "active" : ""}`}
                            to="/search">
                            Search
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-primary'>
                            Cesar
                        </span>
                        <button className='nav-item nav-link btn'>Logout</button>
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

