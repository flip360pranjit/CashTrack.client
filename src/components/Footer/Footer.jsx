import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer_07">
      <div class="container">
        <div class="footer-centre">
          <img
            src="https://assets.website-files.com/5f0be260746ab043052d85ab/5f0be260746ab002b32d862f_Logo%20Main.svg"
            alt=""
            class="logo"
          />
          <p class="paragraph-light">
            We are a team of passionate developers <br /> committed to creating
            innovative solution for trackinhg expenses.
          </p>
          <div class="footer-link-wrap">
            <a href="#" class="footer-link-white">
              Home
            </a>
            <a href="#" class="footer-link-white">
              Dashboard
            </a>
            <a href="#" class="footer-link-white">
              Privacy Policy
            </a>
            <a href="#" class="footer-link-white">
              Help
            </a>
            <a href="#" class="footer-link-white">
              Contact us
            </a>
            <a href="#" class="footer-link-white">
              FAQs
            </a>
          </div>
          <div class="footer-wrapper">
            <a href="#" class="social-link w-inline-block">
              <img
                src="https://assets.website-files.com/5f0be260746ab043052d85ab/5f0be260746ab0ce512d8630_001-facebook.svg"
                alt=""
              />
            </a>
            <a href="#" class="social-link w-inline-block">
              <img
                src="https://assets.website-files.com/5f0be260746ab043052d85ab/5f0be260746ab00cd02d8631_003-twitter.svg"
                alt=""
              />
            </a>
            <a href="#" class="social-link w-inline-block">
              <img
                src="https://assets.website-files.com/5f0be260746ab043052d85ab/5f0be260746ab04f0d2d8632_004-instagram.svg"
                alt=""
              />
            </a>
            <p class="cc">© Copyright 2023 CashTrack</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
