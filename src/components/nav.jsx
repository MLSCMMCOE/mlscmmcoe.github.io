export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
            <a class="navbar-brand header-font-700" href="#"
                ><span class="color-accent-blue">MLSC</span> MMCOE</a
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link body-font-500" aria-current="page" href="#"
                    >Home</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link body-font-500" href="#team-section">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link body-font-500" href="#events-section"
                    >Events</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link body-font-500" href="#gallery-section"
                    >Gallery</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link body-font-500" href="#testimonials-section"
                    >Testimonials</a
                    >
                </li>
                <li class="nav-item">
                    <a
                    href="/contact"
                    class="nav-btn body-font-500 bg-color-primary-blue color-white"
                    >Contact Us</a
                    >
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}