import linkedin from "../Icons/linkedin.png";
import instagram from "../Icons/instagram.png";
import twitter from "../Icons/twitter.png";
import github from "../Icons/github.png";

export const Footer = () => {
  return (
    <div>
      <div className="footer-bar">
        <footer className="footer-content">
          <span> Created with ❤ by </span>
          <a className="link-style" href="https://mohammadsa.netlify.app/">
            Mohammad S{""}
          </a>
          <br />
          <a href="https://www.linkedin.com/in/themohammadsa/">
            <img alt="linkedin" className="icon-footer" src={linkedin} />

            <a href="https://www.instagram.com/themohammadsa/">
              <img alt="instagram" className="icon-footer" src={instagram} />
            </a>
          </a>
          <a href="https://github.com/themohammadsa">
            <img alt="github" className="icon-footer" src={github} />
          </a>
          <a href=" https://twitter.com/themohammadsa">
            <img alt="twitter" className="icon-footer" src={twitter} />
          </a>
          <p>© 2021 gortiTube </p>
        </footer>
      </div>{" "}
    </div>
  );
};
