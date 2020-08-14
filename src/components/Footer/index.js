import React, {useState} from 'react';

import './style.scss';
const FooterComponent = (props) => {
  const [state, setState] = useState({
    referenceUrl: {
      fb: "https://www.facebook.com/hoang.phamkhanh.71",
      mail: "hoangphamkhanh97@gmail.com",
      linkedin: "https://www.linkedin.com/in/khanh-hoang-434954155/",
      tw: "#",
      ins: "https://www.instagram.com/neil_n2t/",
      globe: "#",
      copyRight: "https://www.google-analytics.com/analytics.js",
    }
  })
  const referUrl = state.referenceUrl;
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="footer-top-cap text-center">
                  {/* <img src="assets/img/logo/logo2_footer.png" alt=""></img> */}
                  <span><a href="#">{referUrl.mail}</a></span>
                  <p>221B Baker Street, Post office Box 353 </p>
                  <p>Park Road, VN - 215431</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="footer-copy-right">
                  <p>
                    Copyright ©<script type="text/javascript" async="" src={referUrl.copyRight}></script><script type="text/javascript">document.write(new Date().getFullYear());</script>2020 All rights reserved | This site is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href={referUrl.linkedin} target="_blank">Neil Pham</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="footer-social">
                  <p>
                    <a>Stay Connected </a>
                    <a href={referUrl.tw}><i className="fa fa-twitter"></i></a>
                    <a href={referUrl.fb}><i className="fa fa-facebook-f"></i></a>
                    <a href={referUrl.globe}><i className="fa fa-globe"></i></a>
                    <a href={referUrl.ins}><i className="fa fa-instagram"></i></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default FooterComponent;