import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${
        showNavbar
          ? "show-navbar"
          : "hide-navbar"
      }`}
    >
      <div className="logo">
        TMT Arts
      </div>

      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>

        <li>
          <a href="#products">
            Products
          </a>
        </li>

        <li>
          <a href="#services">
            Services
          </a>
        </li>

        <li>
          <a href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;