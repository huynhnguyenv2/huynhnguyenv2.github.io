import React from 'react';
import '../SectionCover/style.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
const SectionCoverComponent = (props) => {
  return (
    <div className="site-section-cover">
      <div className="container">
        <div className="row align-items-center text-center justify-content-center">
          <div className="col-lg-7">
            <h1 className="mb-4">Do What You Love</h1>
            <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem nulla quos suscipit laborum fugit aspernatur rem pariatur illo.</p>
            <AudioPlayer
              //autoPlay
              src="https://vnso-zn-10-tf-mp3-s1-zmp3.zadn.vn/91e5cdbdb6f95fa706e8/7530549377704939054?authen=exp=1597540997~acl=/91e5cdbdb6f95fa706e8/*~hmac=86035506b8ee23866175a6714bf20138&filename=Forever-Love-LK-Binz-Karik-Den-BigDaddy-T-Akayz-Andree-Soobin-Hoang-Son-Yanbi.mp3"
              onPlay={e => console.log("onPlay")}
              layout="horizontal-reverse"
              showJumpControls={false}
              autoPlayAfterSrcChange={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SectionCoverComponent;