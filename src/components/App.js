import React, { useState, useEffect } from 'react';
import Modal from './Modal.js';
import logo from '../assets/full.png';
import es from '../assets/es.png'
import tg from '../assets/tg.png'
import tw from '../assets/tw.png'
import dx from '../assets/dx.png'
import td from '../assets/td.png'
import uni from '../assets/uni.png'
import cmc from '../assets/cmc.png'
import cg from '../assets/cg.png'
import bg from '../assets/bg.png'
import fl from '../assets/fl.png'
import pl from '../assets/pl.png'
import ae from '../assets/ae.png'
import kym from '../assets/kym.png'
import here from '../assets/here.png'
import mx from '../assets/mx.png'
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
      <div className='welcome'>
        <Modal show={modalVisible} onClose={closeModal} />
      </div>
      {audioPlaying && (
      <audio autoPlay loop>
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      )}
      {/* <div className='top container front'>
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
      </div> */}
      <div>
        <div className='name'>Real Smurf Cat <span className='iname'>шайлушай</span></div>
        <div className="dropdown">
          <button className="dropbtn">about</button>
          <div className="dropdown-content-container">
            {/* Links go here */}
            <a href='https://knowyourmeme.com/memes/%D1%88%D0%B0%D0%B9%D0%BB%D1%83%D1%88%D0%B0%D0%B9-smurf-cat'><img src={kym} width='80px'/><span>history</span></a>
            <a href='https://flooz.xyz/trade/how-to-buy/0xfF836A5821E69066c87E268bC51b849FaB94240C'><img src={fl} width='80px'/>how to buy</a>
            <a href='https://twitter.com/smurfcateth'><img src={tw} width='80px'/><span>memes</span></a>
            <a href='https://t.me/smurfcateth'><img src={tg} width='80px'/><span>smurf chat</span></a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">token info</button>
          <div className="dropdown-content-container">
            {/* Links go here */}
            <a href='https://etherscan.io/token/0xff836a5821e69066c87e268bc51b849fab94240c'><img src={es} width='80px'/><span>etherscan</span></a>
            <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x977c5fcf7a552d38adcde4f41025956855497c6d'><img src={dx} width='70'/><span>dextools</span></a>
            <a href='https://coinmarketcap.com/currencies/real-smurf-cat-eth/'><img src={cmc} width='80px'/><span>coinmarketcap</span></a>
            <a href='https://www.coingecko.com/en/coins/real-smurf-cat'><img src={cg} width='80px'/><span>coingecko</span></a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">where to buy</button>
          <div className="dropdown-content-container">
            {/* Links go here */}
            <a href='#here'><img src={here} width='80px'/>on this site</a>
            <a href='https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xfF836A5821E69066c87E268bC51b849FaB94240C'><img src={uni} width='80px'/>uniswap</a>
            <a href='https://www.bitget.com/spot/SMURFCATUSDT?type=spot'><img src={bg} width='80px'/>bitget</a>
            <a href='https://poloniex.com/trade/SMURFCAT_USDT?type=spot'><img src={pl} width='80px'/>poloniex</a>
            <a href='https://ascendex.com/en/cashtrade-spottrading/usdt/smurfcat'><img src={ae} width='100px'/>ascendex</a>
            <a href='https://www.mexc.com/exchange/SMURFCAT_USDT?_from=search_spot_trade'><img src={mx} width='100px'/>mexc</a>
          </div>
        </div>
      </div>
      <body>
        <div className='top container front'>
          <a>
            <img src={logo} className="App-logo" alt="logo" width='500vw'/>
          </a>
        </div>
        <h1 className='top front'>HE IS REAL.</h1>
      <header className="App-header">
      </header>
      <p className='title'><span className='blue'>SMURFCAT</span> IS A MEMECOIN LAUNCHED ON THE ETHEREUM BLOCKCHAIN. THE CRYPTOCURRENCY WAS CREATED AS A TRIBUTE TO THE SMURF CAT INTERNET MEME ORIGINALLY CREATED BY NATE HALLINAN, AND NEWLY POPULARIZED BY TIKTOK.</p>
      <img src={td} width='400px'/>
      <p className='title front'>ZERO TAX, CONTRACT RENOUNCED,<br/>100% OF SUPPLY SENT TO UNISWAP & LP BURNT</p>
      <iframe id='here' className='swap' frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0xfF836A5821E69066c87E268bC51b849FaB94240C&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%23316bc9&backgroundColor=transparent&roundedCorners=24&padding=20&margin=400" ></iframe>
      <p className='fairy'>concept by nate hallinan 2014, made possible by dmitri</p>
    </body>
  </div>
  );
}

export default App;
