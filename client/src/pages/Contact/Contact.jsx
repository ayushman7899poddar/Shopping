// import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Contact.scss";
import contactImg from "../../assets/contact.jpg";
import { BiMap, BiPhoneCall, BiLink } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Layout title={"Contact Us - SHOP-STAR"}>
      <h1 className="ch1">Contact Us</h1>
      <div className="contact">
        <div className="contact-left">
          <img src={contactImg} alt="" />
        </div>

        <div className="contact-right">
          <h2>Feel Free To Contact Us!</h2>
          <p className="cList">
            <BiMap /> 847427 Darbhanga, Bihar , MishraTola
          </p>
          <p className="cList">
            <BiPhoneCall /> +123 456 789
          </p>
          <p className="cList">
            <MdEmail /> ayushmanxyz@gmail.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
