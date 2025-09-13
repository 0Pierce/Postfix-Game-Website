import "/src/styles/footer.css";
import background from "../assets/svg/footerBackground.svg";
import { Link } from "react-router-dom";
import steamIcon from "../assets/svg/steamIcon.svg";
import discordIcon from "../assets/svg/discIcon.svg";
import instagramIcon from "../assets/svg/instaIcon.svg";
import youtubeIcon from "../assets/svg/ytIcon.svg";
import twitchIcon from "../assets/svg/twitchIcon.svg";
import xIcon from "../assets/svg/xIcon.svg";
import gitHubIcon from "../assets/svg/githubIcon.svg";
import logo from "/placeholder.svg";

export default function Footer() {
  return (
    <>
      <div className="footerBody">
        <div className="footerTop">
          <img src={background} alt="" />
        </div>

        <div className="footerContent">
          <div className="footerSection">
            <div className="footerLogoContainer">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="footerSection">
            <div className="socialMedia">
              <ul>
                <li>
                  <a href="https://store.steampowered.com">
                    <img src={steamIcon} alt="SteamIcon" />
                  </a>
                </li>
                <div className="footerVerticalSpacer"></div>
                <li>
                  <a href="https://store.steampowered.com">
                    <img src={discordIcon} alt="DiscordIcon" />
                  </a>
                </li>
                <div className="footerVerticalSpacer"></div>
                <li>
                  <a href="https://store.steampowered.com">
                    <img src={youtubeIcon} alt="YoutubeIcon" />
                  </a>
                </li>
                <div className="footerVerticalSpacer"></div>
                <li>
                  <a href="https://store.steampowered.com">
                    <img src={twitchIcon} alt="TwitchIcon" />
                  </a>
                </li>
                <div className="footerVerticalSpacer"></div>
                <li>
                  <a href="https://store.steampowered.com">
                    <img src={instagramIcon} alt="InstagramIcon" />
                  </a>
                </li>
                <div className="footerVerticalSpacer"></div>
                <li>
                  <a href="https://store.steampowered.com">
                    <img src={xIcon} alt="xIcon" />
                  </a>
                </li>
                <div className="footerVerticalSpacer"></div>
                <li>
                  <a href="https://github.com/Postfix-Studios">
                    <img src={gitHubIcon} alt="github" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footerLinks">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <div className="footerVerticalSpacer"></div>
                <li>
                  <Link to="/AboutUs">About us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerSection">
            <div className="footerCopyright">
              <p >&copy; 2025 Postfix Studios. All rights reserved.</p>

            </div>
             
          </div>
        </div>
      </div>
    </>
  );
}
