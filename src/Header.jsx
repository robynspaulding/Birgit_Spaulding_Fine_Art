import { useState } from "react";
import { Contact } from "./Contact";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";

export function Header() {
  const [isContactShowVisable, setIsContactShowVisable] = useState(false);

  const handleShowContact = () => {
    setIsContactShowVisable(true);
  };
  const handleClose = () => {
    setIsContactShowVisable(false);
  };

  return (
    <div>
      <nav className="nav" style={{ backgroundColor: "#b8af82" }}>
        <a className="navbar-brand" href="/">
          Birgit Spaulding Fine Art
        </a>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b8af82" }}>
        <Modal show={isContactShowVisable} onClose={handleClose}>
          <Contact />
        </Modal>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/galleries">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bios">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resumes">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={handleShowContact}>
                Contact
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admin Links
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {localStorage.jwt === undefined ? (
                  <>
                    <a className="dropdown-item" href="/login">
                      Admin Login
                    </a>
                    {/* <a className="dropdown-item" href="/signup">
                      Signup
                    </a> */}
                  </>
                ) : (
                  <>
                    <a className="dropdown-item" href="/galleries/new">
                      Add Painting to Gallery
                    </a>
                    <a className="dropdown-item" href="/resumes/new">
                      Add Item to Events
                    </a>
                    <LogoutLink />
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
