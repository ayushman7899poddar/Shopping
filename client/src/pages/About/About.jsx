// import React from "react";
import Layout from "../../components/Layout/Layout";
import aboutImg from "../../assets/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <Layout title={"About Us - SHOP-STAR"}>
      <h1 className="ah1">About Us</h1>
      <div className="about">
        <div className="about-left">
          <img src={aboutImg} alt="" />
        </div>

        <div className="about-right">
          <h2>SHOP-STAR</h2>
          <p>
  your ultimate destination for a stellar online shopping experience! At Shop-Star, we bring you a galaxy of products ranging from the latest fashion trends and cutting-edge electronics to home essentials and unique gifts.
   Our mission is to provide customers with high-quality products at unbeatable prices, all while ensuring a seamless and enjoyable shopping journey.
</p>
<p>
  Explore our user-friendly website to discover exclusive deals, curated collections, and personalized recommendations tailored just for you. With secure payment options and fast, reliable shipping, Shop-Star ensures that your favorite products reach your doorstep swiftly and safely.
</p>
<p>
  We pride ourselves on exceptional customer service, with a dedicated support team available around the clock to assist you with any inquiries or concerns. Join our community of satisfied shoppers and experience the brilliance of online shopping reimagined. At Shop-Star, we dont just sell products; we deliver happiness and convenience straight to you.
</p>
<p>
  Shine bright with Shop-Star and make every shopping experience a star-studded affair!
</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
