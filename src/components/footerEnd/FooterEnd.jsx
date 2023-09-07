import "./footerEnd.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const FooterEnd = () => {
  return (
    <div className="footerEnd">
      <p>Designed & Developed by Sanjeev Singh</p>
      <div className="icons">
        <GitHubIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default FooterEnd;
