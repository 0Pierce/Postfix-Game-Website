import React from 'react'
import Card from "./GameCard"
import "/src/styles/GameMechanicsCards.css";
import placeholder from '/stolenExample.mp4'

export default function GameMechanicsCards() {


  const cardList =[
    {
      title: "Monsters",
      vid: placeholder
    },
    {
      title: "Shifts",
      vid: placeholder
    },
    {
      title: "Sound design",
      vid: placeholder
    },
    {
      title: "Equipment",
      vid: placeholder
    },
  ]



  return (
    <>
    
    <div className="mechCardsBody">

      
      {cardList.map((cardList)=>{
        return <Card title={cardList.title} video={cardList.vid}/>
      })}

    </div>
    
    </>
  )
}
