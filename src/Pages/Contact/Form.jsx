import React from 'react'
import { motion } from "framer-motion";

function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Information */}
          <div>
            <h1 className="text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-400 mt-3">
              Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
            </p>

            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">contact@yourdomain.com</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Follow Us</h2>
              <ul className="mt-3 flex space-x-4">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3b5998] h-10 w-10 rounded-full flex items-center justify-center text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 3h2v7h-2zm2-4h2V7h-2zm-3 1h1v2H9zm1 3h1V9h-1zm3-1h1v2h1z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C13584] h-10 w-10 rounded-full flex items-center justify-center text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2.16c3.186 0 3.566.012 4.819.07 1.219.057 1.839.26 2.27.433.426.174.733.388 1.05.703.317.315.529.624.703 1.051.174.431.376 1.051.433 2.27.057 1.253.07 1.633.07 4.819 0 3.186-.012 3.566-.07 4.819-.057 1.219-.26 1.839-.433 2.27-.174.426-.388.733-.703 1.051-.315.317-.624.529-1.051.703-.431.174-.731.376-2.27.433-1.253.057-1.633.07-4.819 0-3.186-.012-3.566-.07-4.819-.07-1.219 0-1.839.26-2.27.433-.426.174-.733.388-1.05.703-.317.315-.529.624-.703 1.051-.174.431-.376 1.051-.433 2.27-.057 1.253-.07 1.633-.07 4.819 0 3.186.012 3.566.07 4.819.057 1.219.26 1.839.433 2.27.174.426.388.733.703 1.051.315.317.624.529 1.051.703.431.174.731.376 2.27.433 1.253.057 1.633.07 4.819 0zm0 4.464c-1.948 0-3.528 1.58-3.528 3.528 0 1.949 1.58 3.528 3.528 3.528 1.948 0 3.528-1.579 3.528-3.528 0-1.948-1.58-3.528-3.528-3.528zm0 5.808c-1.26 0-2.28-1.02-2.28-2.28 0-1.26 1.02-2.28 2.28-2.28 1.26 0 2.28 1.02 2.28 2.28 0 1.26-1.02 2.28-2.28 2.28zm6.669-6.799c-.732 0-1.255-.522-1.255-1.255 0-.733.523-1.255 1.255-1.255.733 0 1.255.523 1.255 1.255 0 .733-.522 1.255-1.255 1.255z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF0000] h-10 w-10 rounded-full flex items-center justify-center text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10.3 16.4L15.7 12l-5.4-4.4v8.8zm1.3-9.8l6.7 5.3c1 1 1 2.6 0 3.6l-6.7 5.3c-.7.6-1.7.6-2.4 0L3.3 13c-1-1-1-2.6 0-3.6l6.7-5.3c.7-.6 1.7-.6 2.4 0z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
              ></textarea>
              <button
                type="button"
                className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;