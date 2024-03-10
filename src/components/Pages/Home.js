import React from 'react';
import '../../styles/pages/Home.css'
import home from '../../images/home/home.jpg'
import home2 from '../../images/home/home2.jpg'
import YouTube from 'react-youtube'; 


function Home() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    }
    return (
        <div className="homepage-container">
          <div className="section section1">
            <h1>Welcome to SnackMaster!</h1>
            <p>We provide the best vending machine solutions for your business.</p>
          </div>
          <div className="section section2">
            <div className="vending-machine-images">
              <img src={home} alt="Vending Machine 1" />
              <img src={home2} alt="Vending Machine 2" />
            </div>
            <div className="description">
              <h2>Our Vending Machines</h2>
              <p>
                Our vending machines are equipped with the latest technology to
                provide a seamless experience for your customers. With customizable
                options and easy maintenance, they are perfect for any business
                setting.
              </p>
            </div>
          </div>
          <div className="section section3">
            <h2>Watch Our Demo Video</h2>
            <YouTube videoId="Wz_hx9sVy14" opts={opts} />

          </div>
        </div>
      );
}

export default Home;

