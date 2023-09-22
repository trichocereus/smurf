import React, { useState, useEffect } from 'react';
import Modal from './Modal.js';
import logo from '../assets/full.png';
import es from '../assets/es.png'
import tg from '../assets/tg.png'
import tw from '../assets/tw.png'
import db from '../assets/db.png'
import dx from '../assets/dx.png'
import td from '../assets/td.png'
import gif from '../assets/gif.gif'
import eth from '../assets/eth.png'
import ab from '../assets/about.png'
import uni from '../assets/uni.png'
import cmc from '../assets/cmc.png'
import cg from '../assets/cg.png'
import bg from '../assets/bg.png'
import fl from '../assets/fl.png'
import pl from '../assets/pl.png'
import ae from '../assets/ae.png'
import audioFile from '../assets/audio.mp3';

import '../App.css';

function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Use useEffect to show the modal when the component mounts
  useEffect(() => {
    setModalVisible(true);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    setAudioPlaying(true);
  };

  return (
    <div className="App">
      <div className='bouncebox'>
        <div className='bounce'>
          <div className="el-wrap x">
            <img className="el y" src={gif}></img>
          </div>
        </div>
        <div className='bounce1'>
          <div className="le-wrap w">
            <img className="le z" src={eth}></img>
          </div>
        </div>
      </div>
      <div className='container front'>
        <div className='item'>
          <a href='https://etherscan.io/token/0xff836a5821e69066c87e268bc51b849fab94240c'><img src={es} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://t.me/smurfcateth'><img src={tg} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://twitter.com/smurfcateth'><img src={tw} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x977c5fcf7a552d38adcde4f41025956855497c6d'><img src={dx} width='70'/></a>
        </div>
        <div className='item'>
          <a href='https://coinmarketcap.com/currencies/real-smurf-cat-eth/'><img src={cmc} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://www.coingecko.com/en/coins/real-smurf-cat'><img src={cg} width='80px'/></a>
        </div>
      </div>
      <body>
      <div className='welcome'>
        <Modal show={modalVisible} onClose={closeModal} />
      </div>
      {audioPlaying && (
      <audio autoPlay loop>
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      )}
      <h1 className='top front'>шайлушай</h1>
        <div className='container front'>
          <a className='card'>
            <img src={logo} className="App-logo" alt="logo" width='500vw'/>
          </a>
        </div>
        <h1 className='top front'>HE IS REAL.</h1>
      <div className='container front'>

      </div>
      <div className='container front'>
        <div className='item'>
          <h1 className='bottom front line'>BUY:</h1>
        </div>
        <div className='item'>
          <a href='https://flooz.xyz/trade/how-to-buy/0xfF836A5821E69066c87E268bC51b849FaB94240C'><img src={fl} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xfF836A5821E69066c87E268bC51b849FaB94240C'><img src={uni} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://www.bitget.com/'><img src={bg} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://poloniex.com/'><img src={pl} width='80px'/></a>
        </div>
        <div className='item'>
          <a href='https://ascendex.com/en/global-digital-asset-platform'><img src={ae} width='100px'/></a>
        </div>
      </div>
      <header className="App-header">
      </header>
      <h1 className='bottom front'>шайлушай, Real Smurf Cat</h1>
      <div className='front about'>
        <a href='https://knowyourmeme.com/memes/%D1%88%D0%B0%D0%B9%D0%BB%D1%83%D1%88%D0%B0%D0%B9-smurf-cat' className='fairy'><img src={ab} width='300px'/></a>
      </div>
      <h1 className='bottom front'>HE IS ON HIS WAY</h1>
      <img src={td} width='375' className='front swap lef'/>
      <iframe className='front swap' width="400" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0xfF836A5821E69066c87E268bC51b849FaB94240C&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=true&primaryColor=%23316bc9&backgroundColor=transparent&roundedCorners=24&padding=20" ></iframe>
      <h1 className='bottom front'>SHAILUSHAI, only smart blue smurf cat</h1>
      <img src={db} width='500vw' className='front'/>
      <h1 className='top front'>смешной мем</h1>
      <p className='title front'>ZERO TAX, CONTRACT RENOUNCED, LIQUIDITY BURNED FOREVER. <br/>100% OF SUPPLY SENT TO UNISWAP & LP BURNT<br/> true community token</p>
      <p className='fairy'>concept by nate hallinan 2014, made possible by dmitri</p>
    </body>
  </div>
  );
}

export default App;
