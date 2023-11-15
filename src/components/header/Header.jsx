import React, { useEffect, useState } from "react";
import "../header/Header.scss";
import { NavLink } from "react-router-dom";
import Layer from "../../assets/images/Layer.svg";
function Header() {
  const [showmenu, setshowmenu] = useState(window.innerWidth >= 540);
  const handleClickMenu = () => {
    setshowmenu(!showmenu);
  };
  useEffect(() => {
    const handleResize = () => { 
      setshowmenu(window.innerWidth >= 540);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className=" container">
        <div className="Navbar-Header">
          <button className="buton" onClick={handleClickMenu}>
            {" "}
            <img className="Layer " src={Layer} alt="" />{" "}
          </button>{" "}
        </div>
        {showmenu && (
          <div className="Navbar">
            <div className="Navbar-Menu">
              <ul>
                <li>
                  <NavLink to="/">Blog </NavLink> 
                </li>
                <li>
                  {" "}
                  <NavLink> Projects </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink> About </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink> Newsletter </NavLink>{" "}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Header;
