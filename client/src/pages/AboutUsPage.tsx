import Header from "../components/Header";
import Footer from "../components/Footer";

import DevCard from "../components/elements/DevCard";
import placeholder from "/placeholder2.jpg";

import "/src/styles/AboutUsPage.css";

export default function AboutUsPage() {
  const data = [
    {
      img: placeholder,
      name: "Jeffrey Epstein",
      nickName: "xJeffX69",
      position: "femboy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores expedita cumque temporibus distinctio. Quae, ut rerum! Ducimus cupiditate cum ratione, iusto dolorum sapiente dolorem, eveniet, rem porro nulla laboriosam!",
    },
    {
      img: placeholder,
      name: "Jeffrey Epstein",
      nickName: "xJeffX69",
      position: "femboy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores expedita cumque temporibus distinctio. Quae, ut rerum! Ducimus cupiditate cum ratione, iusto dolorum sapiente dolorem, eveniet, rem porro nulla laboriosam!",
    },
    {
      img: placeholder,
      name: "Jeffrey Epstein",
      nickName: "xJeffX69",
      position: "femboy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores expedita cumque temporibus distinctio. Quae, ut rerum! Ducimus cupiditate cum ratione, iusto dolorum sapiente dolorem, eveniet, rem porro nulla laboriosam!",
    },
    {
      img: placeholder,
      name: "Jeffrey Epstein",
      nickName: "xJeffX69",
      position: "femboy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores expedita cumque temporibus distinctio. Quae, ut rerum! Ducimus cupiditate cum ratione, iusto dolorum sapiente dolorem, eveniet, rem porro nulla laboriosam!",
    },
    {
      img: placeholder,
      name: "Jeffrey Epstein",
      nickName: "xJeffX69",
      position: "femboy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores expedita cumque temporibus distinctio. Quae, ut rerum! Ducimus cupiditate cum ratione, iusto dolorum sapiente dolorem, eveniet, rem porro nulla laboriosam!",
    },
    {
      img: placeholder,
      name: "Jeffrey Epstein",
      nickName: "xJeffX69",
      position: "femboy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores expedita cumque temporibus distinctio. Quae, ut rerum! Ducimus cupiditate cum ratione, iusto dolorum sapiente dolorem, eveniet, rem porro nulla laboriosam!",
    },

  ];

  return (
    <>
      <Header />
      <div className="aboutUsPage">
        <div className="aboutUsGrid">
          {data.map((data)=>{
            return <DevCard profileImg={data.img} name={data.name} nickName={data.nickName} position={data.position} description={data.description}/>

          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
