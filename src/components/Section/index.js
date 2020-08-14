import React from 'react';
import './style.scss'
const SectionComponent = () => {
  return (
    <div className="site-section about-area">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 mt-5">
            <div className="about-caption mb-50">
              <h3>Designing With Passion While Exploring The World.</h3>
              <p className="pera1">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <div className="col-md-5 mt-5 offset-md-2">
            <div className="about-caption2">
              <h3>Any Type Of Query<br></br>&amp; Discussion.</h3>
              <p>Let's talk with me</p>
              <div className="send-cv">
                <a href="#">hoangphamkhanh97@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SectionComponent;