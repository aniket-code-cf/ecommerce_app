import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Watch Store App!
          We believe that shopping should be an 
          enjoyable experience. Our mission is to bring you the best products at unbeatable prices, backed by exceptional customer service.
          </p>
          <p>
          Our mission is to deliver products that enhance your life. Whether it's [specific product types, e.g., fashion, electronics, home goods], we strive to provide items that add value and convenience to your everyday routine.
           We are committed to curating a diverse selection of products that cater to all your needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;