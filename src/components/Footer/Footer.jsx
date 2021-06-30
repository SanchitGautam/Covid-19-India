import React from "react";
import "./Footer.css";
var d = new Date();
var n = d.getFullYear();
function Footer() {
  return (
    <div>
      <div className="footer">
        <h1>
          Covid-19 <strong>INDIA</strong>
        </h1>
        <p>We stand with everyone fighting on the frontlines</p>
        <div class="social_links">
          <a href="https://github.com/covid19india">
            <span class="fa-stack fa-lg gt combo">
              <i class="fa fa-circle fa-stack-2x circle"></i>
              <i class="fa fa-github fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://api.covid19india.org/data.json">
            <span class="fa-stack fa-lg db combo">
              <i class="fa fa-circle fa-stack-2x circle"></i>
              <i class="fa fa-database fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://www.instagram.com/">
            <span class="fa-stack fa-lg ig combo">
              <i class="fa fa-circle fa-stack-2x circle"></i>
              <i class="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://www.facebook.com/">
            <span class="fa-stack fa-lg fb combo">
              <i class="fa fa-circle fa-stack-2x circle"></i>
              <i class="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://www.youtube.com/">
            <span class="fa-stack fa-lg yt combo">
              <i class="fa fa-circle fa-stack-2x circle"></i>
              <i class="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="https://twitter.com/IndiaCOVID_19">
            <span class="fa-stack fa-lg tw combo">
              <i class="fa fa-circle fa-stack-2x circle"></i>
              <i class="fa fa-twitter fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
          <a href="mailto:ncov2019@gov.in">
            <span class="fa-stack fa-lg ml combo">
              <i class="fa fa-circle fa-stack-2x circle"></i>
              <i class="fa fa-envelope fa-stack-1x fa-inverse icon"></i>
            </span>
          </a>
        </div>
        <br></br>
      </div>
      <div className="cp">Copyright @ {n} Covid-19 INDIA | All rights reserved | Developed by: Sanchit</div>
    </div>
  );
}

export default Footer;
