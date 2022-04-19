import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="footer">
        <a
          href="https://github.com/Seo-Pt/weather-app"
          target="_blank"
          rel="noreferrer"
          title="Visit my GitHub page"
          className="gitHub-link"
        >
          Open-source code
        </a>{" "}
        by Seonah Nathali
      </div>
    </div>
  );
}
