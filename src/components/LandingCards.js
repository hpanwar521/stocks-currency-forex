import React from "react";
import './LandingCards.css';

const LandingCards = () => {
  return (
    <div class="container-fluid mb-5">
      {/* <div class="text-center mt-5">
        <h1>Our Services</h1>
      </div> */}
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="box">
            <div class="our-services settings">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/6NKPrhO.png" />{" "}
              </div>
              <h4>Daily Stocks</h4>
              <p>A demo of fetching stocks on the basis of a day. Which we will display on chart. </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="box">
            <div class="our-services speedup">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/KMbnpFF.png" />{" "}
              </div>
              <h4>Weekly Stocks</h4>
              <p>A demo of fetching stocks on the basis of a week. Which we will display on chart.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="box">
            <div class="our-services privacy">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/AgyneKA.png" />{" "}
              </div>
              <h4>Monthly Stocks</h4>
              <p>A demo of fetching stocks on the basis of a month. Which we will display on chart.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="box">
            <div class="our-services backups">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/vdH9LKi.png" />{" "}
              </div>
              <h4>Multiple Stocks Comparison</h4>
              <p>Fetching multiple stocks and Compare them. </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="box">
            <div class="our-services ssl">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/v6OnUqu.png" />{" "}
              </div>
              <h4>Current Exchange Value</h4>
              <p>Calculate live currency and foreign exchange rates.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="box">
            <div class="our-services database">
              <div class="icon">
                {" "}
                <img src="https://i.imgur.com/VzjZw9M.png" />{" "}
              </div>
              <h4>Monthly Forex Comparison</h4>
              <p> Foreign exchange rates for every currency. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCards;
