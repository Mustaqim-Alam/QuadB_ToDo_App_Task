import React from "react";

function Navbar() {
  return (
    <div className=" flex justify-between">
      <img
        src="https://www.quadbtech.com/images/QBT%20Logo%20Black.png"
        alt="Quadb"
      />
      <button className=" bg-custom-bg px-7 py-0 rounded-3xl " >
        <a href="https://www.quadbtech.com/index.html"> Contact Us</a>
      </button>
    </div>
  );
}

export default Navbar;
