import React from "react";
import { data } from "../components/Accordion/data.js";
import { Accordion } from "../components/Accordion.jsx";

export const FAQ = () => {
  return (
    <div>
      <div>
        <h3 className="main-title">Frequently Asked Questions</h3>
        <div className="main-title-underline"></div>
        {data.map((section, index) => (
          <Accordion className='accordion' key={index} section={section} />
        ))}
      </div>
    </div>
  );
};