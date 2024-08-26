// import React from "react";
import Layout from "../../components/Layout/Layout";
import policyImg from "../../assets/policy.jpg";
import "./Policy.scss";

const Policy = () => {
  return (
    <Layout title={"Policy - SHOP-STAR"}>
      <h1 className="ph1">Policy</h1>
      <div className="policy">
        <div className="policy-left">
          <img src={policyImg} alt="" />
        </div>

        <div className="policy-right">
          <h2>Our Policy</h2>
          Shop-Star E-commerce Policies
1. Privacy Policy

At Shop-Star, we prioritize your privacy and are committed to protecting your personal information. We collect, store, and use your data solely to enhance your shopping experience, provide personalized services, and improve our offerings. Your information will never be shared with third parties without your consent, except as required by law. We use advanced security measures to ensure that your data is safe and secure. For more details, please refer to our full Privacy Policy.
2. Return and Refund Policy

We want you to be completely satisfied with your purchase. If you are not happy with your order, you can return the product within 30 days of receipt for a full refund or exchange, provided the item is in its original condition and packaging. Please note that certain items, such as perishable goods or customized products, may not be eligible for return. Refunds will be processed within 5-7 business days after we receive the returned item. Shipping fees are non-refundable unless the return is due to an error on our part. For more information, please refer to our Return and Refund Policy.
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
