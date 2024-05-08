/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ onClick, styles }) => {
  
  return (
    <button onClick={onClick} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Loslegen
    </button>
  )
};

export default Button;