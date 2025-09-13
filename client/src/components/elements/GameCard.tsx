import React from "react";
import "/src/styles/GameCard.css";
import Spacer from "./Spacer";

type gameCardType = {
  title: string;
  video: string;
  description?: string;
};

export default function GameCard({ title, video }: gameCardType) {
  return (
    <div className="mechCardBody">
      <Spacer />
      <div className="mechCardTitle">
        <h1>{title}</h1>
      </div>
      <Spacer />
      <div className="mechCardBanner">
        <video src={video} autoPlay loop muted></video>
      </div>
    </div>
  );
}
