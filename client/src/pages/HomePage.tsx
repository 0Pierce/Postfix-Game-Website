import '/src/styles/Homepage.css'


import Header from '../components/Header'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import GameOverview from "../components/GameOverview"

export default function Homepage() {
  return (
    <>
        <Header/>
        <Landing/>
        
        <GameOverview/>
        <Footer/>
    </>
  )
}