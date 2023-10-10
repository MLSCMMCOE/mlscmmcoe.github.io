export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <a className="navbar-brand header-font-700" href="#"
                ><span className="color-accent-blue">MLSC</span> MMCOE</a
            >
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link body-font-500" aria-current="page" href="#"
                    >Home</a
                    >
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link body-font-500" href="#team-section">Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link body-font-500" href="#events-section"
                    >Events</a
                    >
                </li>
                <li className="nav-item">
                    <a className="nav-link body-font-500" href="#gallery-section"
                    >Gallery</a
                    >
                </li>
                <li className="nav-item">
                    <a className="nav-link body-font-500" href="#testimonials-section"
                    >Testimonials</a
                    >
                </li>
                <li className="nav-item">
                    <a
                    href="/contact"
                    className="nav-btn body-font-500 bg-color-primary-blue color-white"
                    >Contact Us</a
                    >
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}