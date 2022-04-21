import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="footer">
        <a
          href="https://github.com/Seo-Pt/react-weather"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my GitHub page"
          className="gitHub-link"
        >
          Open-source code
        </a>{" "}
        by Seonah Nathali, hosted by <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" title="Netlify Homepage" className="netlify-link">Netlify</a>
      </div>
    </div>
  );
}
