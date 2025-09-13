import "/src/styles/DevCard.css";

type devCardType = {
  profileImg: string;
  name: string;
  nickName?: string;
  position: string;
  description: string;
};

export default function DevCard({
  profileImg,
  name,
  position,
  description,
  nickName,
}: devCardType) {
  return (
    <div className="devCardBody">
      <div className="devCardTop">
        <img src={profileImg} alt="" />
      </div>
      <div className="devCardSpacer"></div>
      <div className="devCardBottom">
        <div className="devCardBottomContainer">
          <div className="devCardID">
            <h2>{name}</h2>
            <h3 className="devCardNickname">{nickName}</h3>
          </div>

          <div className="devCardPosition">
            <h5>{position}</h5>
          </div>

          <div className="devCardContent">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
