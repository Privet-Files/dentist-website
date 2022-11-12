import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../Sortcomponent/PrimaryBtn";
import appoinment from "../../assets/images/appointment.png";

const ContactForm = () => {
  return (
    <div style={{ background: `url(${appoinment})` }}>
      <div className="flex flex-col md:w-1/3 w-full lg:w-1/3 m-auto p-6 rounded-md sm:p-10 bg-light-500 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-3xl font-bold text-white">
            Stay Connected with Us
          </h1>
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light-500 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2"></div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Passowrd"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light-500 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2"></div>
              <textarea
                name=""
                id=""
				placeholder="Enter Your Message "
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light-500 text-gray-100"
              ></textarea>
            </div>
          </div>
          <div className="space-y-2">
            <p className="px-6 text-sm text-center text-gray-400">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                {" "}
                <PrimaryBtn>SubMit</PrimaryBtn>{" "}
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

//
