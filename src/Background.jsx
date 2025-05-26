import "./BackgroundLayout.css";
import BackgroundImage from "./assets/images/BackgroundDesktop.png";
import Circle from "./assets/images/pattern-circle.svg";
import Lines from "./assets/images/pattern-lines.svg";
import WaveTop from "./assets/images/pattern-squiggly-line-top.svg";
import WaveBottom from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import WaveBottomMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";

const Background = ({ children }) => {
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <img src={Circle} alt="Circle" className="shape circle" />
      <img src={Circle} alt="Circle2" className="shape circle-top" />
      <img src={Lines} alt="Lines" className="shape lines" />
      <img src={WaveTop} alt="Wave Top" className="shape wave-top" />
      <img src={WaveBottom} alt="Wave Bottom" className="shape wave-bottom" />
      <img
        src={WaveBottomMobile}
        alt="Wave Bottom Mobile"
        className="wave-bottom-mobile"
      />
      {children}
    </div>
  );
};

export default Background;
