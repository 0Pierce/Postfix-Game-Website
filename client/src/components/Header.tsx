import { Link } from "react-router-dom";
import "/src/styles/Header.css";
import logo from "../assets/svg/placeholder.svg";
import { useEffect, useState } from "react";
import steamIcon from "../assets/svg/steamIcon.svg";

export default function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.pageYOffset);

      if (window.pageYOffset > document.documentElement.clientHeight * 0.7) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="headerContainer">
        <div className={shrink ? "headerBodyShrink" : "headerBody"}>
          <div className="headerLeft">
            <img src={logo} alt="Logo" className={shrink ? "logoImgShrink" : "logoImg"} />
            <h3 className={shrink ? "headerLeftTitleShrink" : "headerLeftTitle"}>Conveyer Crew</h3>
          </div>

          <div className="headerRight">
            <ul>
              <li>
                <a href="https://store.steampowered.com">
                  <img src={steamIcon} alt="SteamIcon" className={shrink ? "iconImgShrink" : "iconImg"} />
                </a>
              </li>
              <div className="headerVerticalSpacer"></div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <div className="headerVerticalSpacer"></div>
              <li>
                <Link to="/AboutUs">About us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={shrink ? "headerSpacerShrink" : "headerSpacer"}></div>
      </div>
    </>
  );
}
