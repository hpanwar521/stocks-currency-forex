import React from 'react'

import './statisticalCards.css';

const StatisticalCard = ({symbol,region,open,close}) => {
    return (
        <div class="container">
        <div class="row">
          
         <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="stati pomegranate left">
          {/* <i class="icon-puzzle icons"></i> */}
          <div>
            <b>{symbol}</b>
            <span>Symbol</span>
          </div> 
        </div>
      </div> 
      <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="stati amethyst left">
            {/* <i class="icon-chemistry icons"></i> */}
            <div>
              <b>{region}</b>
              <span>Region</span>
            </div> 
          </div>
        </div> 
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="stati nephritis left">
        {/* <i class="icon-pie-chart icons"></i> */}
          <div>
            <b>{open}</b>
            <span>Open</span>
          </div> 
        </div>
      </div>  
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="stati orange left">
            {/* <i class="icon-crop icons"></i> */}
            <div>
              <b>{close}</b>
              <span>Close</span>
            </div> 
          </div>
        </div> 
        
  </div>
  </div>
    )
}

export default StatisticalCard
