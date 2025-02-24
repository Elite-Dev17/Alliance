import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faHeart,
  faSearch,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import Logo from "../../assets/images/logo/Logo.png"

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleDropdownToggle = (dropdownId) => {
    setActiveDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <div className={styles.navWrapper}>
      {/* Top Bar - Remains Static */}
      <div className={styles.topBar}>
        <Container className="d-flex justify-content-between align-items-center">
          <div className={styles.topBarLeft}>{currentDate}</div>
          <div className={styles.topBarCenter}>
            <span className={styles.topBarInfo}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Dandora, Nairobi, Kenya
            </span>
            <span className={styles.topBarInfo}>
              <FontAwesomeIcon icon={faEnvelope} /> info@alliance.com
            </span>
            <span className={styles.topBarInfo}>
              <FontAwesomeIcon icon={faPhone} /> 0710 128 781
            </span>
          </div>
          <div className={styles.topBarRight}>
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation - Becomes Fixed on Scroll */}
      <BootstrapNavbar
        expand="lg"
        className={`${styles.mainNav} ${isScrolled ? styles.fixedNav : ""}`}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            {/* Mobile Menu Toggle */}
            <button
              className={`${styles.menuToggle} d-lg-none`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Logo */}
            <BootstrapNavbar.Brand as={Link} to="/" className={styles.brand}>
              <img src= {Logo} alt="Logo" className={styles.logo} />
            </BootstrapNavbar.Brand>

            {/* Mobile Search Toggle */}
            <button className={`${styles.searchBtn} d-lg-none`} aria-label="Toggle mobile search">
              <FontAwesomeIcon icon={faSearch} />
            </button>

            {/* Navigation Menu */}
            <div className={`${styles.navCollapse} ${isOpen ? styles.show : ""}`}>
              {/* Mobile Header */}
              <div className={`${styles.mobileHeader} d-lg-none`}>
                <img src= {Logo} alt="Logo" className={styles.logo} />
                <button className={styles.closeBtn} onClick={toggleMobileMenu} aria-label="Close mobile menu">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              {/* Navigation Links */}
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/" className={styles.navLink} onClick={toggleMobileMenu}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className={styles.navLink} onClick={toggleMobileMenu}>
                  About Us
                </Nav.Link>

                {/* Programs Dropdown */}
                <div className={`${styles.navItem} ${activeDropdown === "programs" ? styles.active : ""}`}>
                  <div className={styles.navLink} onClick={() => handleDropdownToggle("programs")}>
                    Programs <span className={styles.plusIcon}>+</span>
                  </div>
                  <div className={styles.dropdownContent}>
                    <Link to="/programs" className={styles.dropdownItem} onClick={toggleMobileMenu}>
                      Academic Programs
                    </Link>
                    <Link to="/programs" className={styles.dropdownItem} onClick={toggleMobileMenu}>
                      Extra-curricular
                    </Link>
                    <Link to="/programs" className={styles.dropdownItem} onClick={toggleMobileMenu}>
                      Support Services
                    </Link>
                  </div>
                </div>

                <Nav.Link as={Link} to="/gallery" className={styles.navLink} onClick={toggleMobileMenu}>
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className={styles.navLink} onClick={toggleMobileMenu}>
                  Contact Us
                </Nav.Link>
              </Nav>

              {/* Desktop Right Side Buttons */}
              <div className={`${styles.navRight} mt-3 mt-lg-0`}>
                <button className={styles.searchBtn}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <Link to="/contact" className={styles.donateBtn}>
                  <FontAwesomeIcon icon={faHeart} /> Support US
                </Link>
              </div>

              {/* Mobile Search */}
              <div className={`${styles.mobileSearch} d-lg-none`}>
                <input type="text" placeholder="Search for..." className={styles.searchInput} />
                <button className={styles.searchSubmit}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </BootstrapNavbar>
    </div>
  );
};

export default CustomNavbar;
