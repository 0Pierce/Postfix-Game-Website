import "/src/styles/Landing.css";
// import landingImage from "../assets/svg/placeholder.svg";

export default function Landing() {
  return (
    <>
      <div className="landingBody">
        <div className="landingBanner">
          {/* <img src={landingImage} alt="" /> */}
          <video src="/stolenExample.mp4" autoPlay loop muted playsInline></video>
        </div>
        <div className="landingFade"></div>
        <div className="landingInfo">
          <div className="landingContentBorder">
            <div className="landingInfoContent">
              <p>
                <span className="landingBold">Conveyer crew</span> Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Modi placeat
                molestias eum ipsa <span className="landingBold">repellat earum</span>, ex officia. Voluptatibus eum
                 <span className="landingBold"> consequatur</span> sint pariatur ipsa laboriosam fugit, consequuntur
                suscipit amet asperiores expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
