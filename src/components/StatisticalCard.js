import React from 'react'

import './statisticalCards.css';

const StatisticalCard = () => {
    return (
        <div class="container">
        <div class="row">
         <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="stati pomegranate ">
          <i class="icon-puzzle icons"></i>
          <div>
            <b>34</b>
            <span>bg-wisteria</span>
          </div> 
        </div>
      </div> 
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="stati amethyst left">
            <i class="icon-chemistry icons"></i>
            <div>
              <b>15</b>
              <span>bg-amethyst left</span>
            </div> 
          </div>
        </div> 
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="stati nephritis left">
        <i class="icon-pie-chart icons"></i>
          <div>
            <b>35</b>
            <span>bg-wisteria left</span>
          </div> 
        </div>
      </div>  
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="stati orange ">
            <i class="icon-crop icons"></i>
            <div>
              <b>14</b>
              <span>bg-amethyst</span>
            </div> 
          </div>
        </div> 
        
  </div>
  </div>
    )
}

export default StatisticalCard
