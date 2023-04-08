import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "./Navbar.module.scss";
import Logo from "../../assets/logo.png";


function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const toggleClicked = () => {
    setIsClicked(!isClicked);
  };


  return (
    <nav
      className={scrolled ? `${style.navbar} ${style.scrolled}` : style.navbar}
    >
      <div className={style.brand}>
        <img className={style.img} src={Logo} alt="Logo" />
        <h2>Cash Track</h2>
      </div>
      <ul className={isClicked ? style.activelinks : ``}>
        <li>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setIsClicked((prev) => !prev);
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
          // onClick={() => {
          //   aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          //   setIsClicked((prev) => !prev);
          // }}
          >
            About
          </button>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
      <div
        className={
          isClicked ? `${style.hamburger} ${style.active}` : style.hamburger
        }
        onClick={toggleClicked}
      >
        {isClicked ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}


export default Navbar;
