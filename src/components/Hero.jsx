import "./Hero.css";

const Hero = ({subtitle = "Enter a subtitile Please!"}) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Want to Become a <span>REACT Dev</span> 💻
        </h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
