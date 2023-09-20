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
        <header className="App-header">
        <div className='container front'>
          <div className='item'>
            <a href='https://etherscan.io/token/0xff836a5821e69066c87e268bc51b849fab94240c'><img src={es} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://t.me/smurfcateth'><img src={tg} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://twitter.com/smurfcateth'><img src={tw} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x977c5fcf7a552d38adcde4f41025956855497c6d'><img src={dx} width='105px'/></a>
          </div>
        </div>
        <div className='container front'>
          <div className='item'>
            <a href='https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xfF836A5821E69066c87E268bC51b849FaB94240C'><img src={uni} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://coinmarketcap.com/currencies/real-smurf-cat-eth/'><img src={cmc} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://www.coingecko.com/en/coins/real-smurf-cat'><img src={cg} width='120px'/></a>
          </div>
        </div>
      </header>
      <h1 className='bottom front'>шайлушай, Real Smurf Cat</h1>
      <div className='front about'>
        <a href='https://knowyourmeme.com/memes/%D1%88%D0%B0%D0%B9%D0%BB%D1%83%D1%88%D0%B0%D0%B9-smurf-cat' className='fairy'><img src={ab} width='300px'/></a>
      </div>
      <h1 className='bottom front'>HE IS ON HIS WAY</h1>
      <img src={td} width='500vw' className='front'/>
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
