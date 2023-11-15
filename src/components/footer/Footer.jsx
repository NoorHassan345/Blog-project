import React, { useState, useEffect } from "react";
import "../footer/Footer.scss";
function Footer() {
  const [toggle, settoggle] = useState(false);
  const toggleClass = toggle ? "notContainer" : "container";
  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL === "http://localhost:3000/a") {  
      settoggle(true);
    }
  }, []);
  return (
    <>
      <div className=" main-Footer">
        <div className={`container ${toggleClass}`}>  
          <div className="Footer ">
            <ul className="Footer-List">
              <li> &copy; 2023 </li>
              <li> Twitter </li>
              <li> LinkedIn </li>
              <li> Email </li>
              <li> RSS feed </li>
              <li> Add to Feedly </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
