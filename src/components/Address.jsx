import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel:923188565612">+92 318 8565612</a>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:info@beacontechh.com">info@beacontechh.com</a>
        </span>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          Office No 7,8, Umar Plaza, Blue Area,
          <br /> Islamabad, Pakistan.
        </span>
      </li>
    </ul>
  );
};

export default Address;
