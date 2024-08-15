import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitileCards from '../../components/TitileCards/TitileCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>
          Camille Logan is determined to be more than the spoiled heiress and daddy's girl that everyone sees.
          Tiger Chen, a man with exceptional martial arts skills.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitileCards />
        </div>
      </div>
      <div className="more-card">
       <TitileCards title={"Top Rated On Netflix "} catecgory={"top_rated"}/>
        <TitileCards title={"Blockbuster Movies"} catecgory={"now_playing"}/>
        <TitileCards title={"Upcomming"} catecgory={"upcoming"} />
        <TitileCards title={"Only On Netflix"} catecgory={"popular"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
