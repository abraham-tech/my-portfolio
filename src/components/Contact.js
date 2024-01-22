import React from "react";
import Heading from "../utils/Heading";
import Paragraph from "../utils/Paragraph";
import Icons from "./Icons";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="section-content" id="contact">
        <Heading heading={"CONTACT ME"} />
        <Icons />
        <br />
        <Paragraph info={"Made with ❤️ by Abraham"} />
      </div>
    </div>
  );
};

export default Contact;
