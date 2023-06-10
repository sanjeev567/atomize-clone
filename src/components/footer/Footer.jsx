import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="card">
        <p>Docs</p>
        <ul className="ulList">
          <li>Installation</li>
          <li>Theme Setup</li>
          <li>Grid</li>
          <li>Atoms</li>
          <li>Molecules</li>
          <li>Functions</li>
        </ul>
      </div>
      <div className="card">
        <p>Atommize</p>
        <ul className="ulList">
          <li>Features</li>
          <li>Design</li>
          <li>Developement</li>
        </ul>
      </div>
      <div className="card">
        <p>Resources</p>
        <ul className="ulList">
          <li>Sketch File</li>
          <li>Github</li>
        </ul>
      </div>
      <div className="card">
        <p>About</p>
        <ul className="ulList">
          <li>Showcase</li>
          <li>Contribute</li>
        </ul>
      </div>
      <div className="card">
        <p>Extras</p>
        <ul className="ulList">
          <li>Blog</li>
          <li>Need Help?</li>
          <li>Give Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
