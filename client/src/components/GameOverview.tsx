import "/src/styles/GameOverview.css";
import GameCards from "../components/elements/GameMechanicsCards";

export default function GameOverview() {
  return (
    <>
      <div className="gameOverviewBody">
        <div className="gameCardContainer">
          {/* <h1>Key Features</h1> */}

          <div className="gameGridContainer">
            <GameCards />
          </div>
        </div>

        <div className="gameDescription">
          <h1>Description</h1>
          <div className="gameDescriptionContainer">
            <div className="gameDescriptionBorder">
             
              <div className="gameDescriptionContent">
               
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, fuga. Repellendus, libero. Laborum molestias earum
                  omnis recusandae in quas aliquid necessitatibus maiores
                  facilis? Ad, aliquam nihil ducimus veniam non beatae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Illo rerum
                  nihil commodi cumque perspiciatis ipsa placeat totam officiis
                  labore odio eveniet aliquam ipsam, cum quisquam atque,
                  voluptas alias modi quod.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Impedit eaque maxime molestiae assumenda excepturi, quos, ex
                  eveniet facilis possimus voluptates a. Eius, commodi culpa
                  corrupti similique ipsa laborum placeat nesciunt. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Distinctio
                  laboriosam eveniet qui. Numquam aliquam magnam cum veritatis
                  impedit officiis sapiente soluta rerum rem inventore sunt,
                  ratione maiores autem! Obcaecati, fuga!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
