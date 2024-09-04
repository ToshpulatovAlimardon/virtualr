import "./Header.css";
import videoFirst from "../../assets/video1.mp4";
import videoSecond from "../../assets/video2.mp4";

const Header = () => {
  return (
    // Header
    <div id="header">
      {/* Header description */}
      <div className="header-desc">
        <h1>
          VirtualR build tools <span>for developers</span>
        </h1>
        <p>
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="header-btn">
          <a href="#" className="btn-primary">
            Start for free
          </a>
          <a href="#" className="btn-secondary">
            Documentation
          </a>
        </div>
      </div>

      {/* Header video */}
      <div className="header-video">
        <video autoPlay loop muted>
          <source  src={videoFirst} type="video/mp4"/>
        </video>
        <video autoPlay loop muted>
          <source  src={videoSecond} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default Header;
