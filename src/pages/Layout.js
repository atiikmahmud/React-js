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
      {/* Navbar Section Start */}

      <div className="navber-section">
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
          <div className="container">
            <Link to="/" className="navbar-brand">React App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blogs" className="nav-link">Blogs</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu">
                    <li><Link to="/employee" className="dropdown-item">Employee</Link></li>
                    <li><Link to="/newemp" className="dropdown-item">Add Employee</Link></li>
                    <li><Link to="/hooks" className="dropdown-item">React Hooks</Link></li>
                    <li><Link to="/custom" className="dropdown-item">Custom Hooks</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
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