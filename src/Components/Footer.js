import React from "react";
import "./Footer.css";


const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Tamil",
  "Hindi",
  "Chinese",
  "Russian",
  "Japanese",
  "Arabic",
];
const currency = ["$ - USD", "₹ - INR", "£ - GBP", "€ - EUR", "¥ - JPY"];
const footerLinks = [
  {
    title: "Get to Know Us",
    list: ["About BCA E-Shop Wala", "Connect with Us", "BCA E-Shop Wala Cares", "Gift a Smile"],
  },
  {
    title: "Make Money with Us",
    list: [
      "Sell products on BCA E-Shop Wala",
      "Sell apps on BCA E-Shop Wala",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an BCA E-Shop Wala Hub",
      "› See More",
    ],
  },
  {
    title: "BCA E-Shop Wala Payment",
    list: [
      "BCA E-Shop Wala Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "BCA E-Shop Wala Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    list: [
      "BCA E-Shop Wala and COVID-19",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Devices",
      "BCA E-Shop Wala Assistant",
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__disclaimer">
          <strong>Disclaimer:</strong> This is official BCA E-Shop Wala Store. It
          is a made by Reactjs.
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__row">
              <h6>{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
         
        </div>
      </div>
  
  );
}
export default Footer;
