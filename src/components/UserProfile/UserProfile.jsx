import React from "react";
import "./UserProfile.css";

function UserProfile() {
  return (
    <div class="bg">
      <span class="main_bg"></span>

      <div class="container">
        <header>
          <div class="brandLogo">
            <figure>
              <img src="web_logo.jpg" alt="logo" width="40px" height="40px" />
            </figure>
            <span>CashTrack</span>
          </div>
        </header>

        <section class="userProfile card">
          <div class="profile">
            <figure>
              <img
                src="data:image/png;base64,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"
                alt="profile"
                width="250px"
                height="250px"
              />
            </figure>
          </div>
        </section>

        <section class="work_Expenses card">
          <div class="work">
            <h1 class="heading">work</h1>
            <div class="primary">
              <h1>NIT Silchar,Assam</h1>

              <p>
                NIt road <br /> Silchar, QQ5R+3WM
              </p>
            </div>
          </div>

          <div class="Expenses">
            <h1 class="heading">Expenses</h1>
            <ul>
              <li>Food</li>
              <li>Entertainment</li>
              <li>Travelling</li>
              <li>Academics</li>
            </ul>
          </div>
        </section>

        <section class="userDetails card">
          <div class="userName">
            <h1 class="name">User's Full Name</h1>
            <div class="map">
              <i class="ri-map-pin-fill ri"></i>
            </div>
            <p>software Developer</p>
          </div>

          <div class="rank">
            <h1 class="heading">Age of the User</h1>
            <span>YY</span>
            <div class="rating">
              <i class="ri-star-fill rate"></i>
              <i class="ri-star-fill rate"></i>
              <i class="ri-star-fill rate"></i>
              <i class="ri-star-fill rate"></i>
              <i class="ri-star-fill rate underrate"></i>
            </div>
          </div>

          <div class="btns">
            <ul>
              <li class="sendMsg active">
                <i class="ri-check-fill ri"></i>
                <a href="#">Contacts</a>
              </li>

              <li class="sendMsg">
                <a href="#">Report User</a>
              </li>
            </ul>
          </div>
        </section>

        <section class="timeline_about card">
          <div class="tabs">
            <ul>
              <li class="about active">
                <i class="ri-user-3-fill ri"></i>
                <span>About</span>
              </li>
            </ul>
          </div>

          <div class="contact_Info">
            <h1 class="heading">Contact Information</h1>
            <ul>
              <li class="phone">
                <h1 class="label">Phone:</h1>
                <span class="info">+91 XX 000 000XX</span>
              </li>

              <li class="address">
                <h1 class="label">Address:</h1>
                <span class="info">
                  BH-8 ,NIT Silchar <br /> Silchar, Assam
                </span>
              </li>

              <li class="email">
                <h1 class="label">E-mail:</h1>
                <span class="info">userid@gmail.com</span>
              </li>
            </ul>
          </div>

          <div class="basic_info">
            <h1 class="heading">Basic Information</h1>
            <ul>
              <li class="birthday">
                <h1 class="label">U.P.I:</h1>
                <span class="info">userid123@ybl</span>
              </li>

              <li class="sex">
                <h1 class="label">Gender :</h1>
                <span class="info">Male/Female</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
