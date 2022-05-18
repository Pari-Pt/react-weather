import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="footer">
        <div>
        <a
          href="https://github.com/Seo-Pt/react-weather"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my GitHub page"
          className="gitHub-link"
        >
          Open-source code
        </a>{" "}
        by <a href="https://confident-elion-25e30f.netlify.app/index.html" target="_blank" rel="noopener noreferrer" title="Seonah's Portfolio" className="portfolio-link">Seonah Nathali</a></div>
        <div>Hosted by <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" title="Netlify Homepage" className="netlify-link">Netlify</a>
        </div>
      </div>
    </div>
  );
}
