import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const myStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "56px"
  };

  const myStyle2 = {
    marginBottom: "75px"

  };

  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      {/* Navbar Section Start */}

      <div className="navber-section">
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
          <div className="container">
            <a className="navbar-brand" href="/">React App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blogs">Blogs</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/hooks">React Hook</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar Section End */}

      {/* Page Content Start*/}

      <div className="content-section mt-3" style={myStyle2}>
        <Outlet />
      </div>

      {/* Page Content End */}

      {/* Footer Section Start */}

      <footer style={myStyle} className="text-center bg-light">
        <p className="mt-3">React App &copy; Atik Mahmud</p>
      </footer>

      {/* Footer Section End */}
    </>
  )
};

export default Layout;