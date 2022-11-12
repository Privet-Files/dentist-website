import React from "react";
import footerimg from '../../assets/images/footer.png'

const Footer = () => {
  return (
    <div style={{background : `url(${footerimg})` , backgroundSize : 'cover'}}>
      <footer className="footer p-10 w-full mx-auto">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="py-5"> <p className="text-center text-xl text-indigo-900">Coppyriht by tanzil - dentist website </p> </div>
    </div>
  );
};

export default Footer;
