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
import ugly from '../assets/ugly.png'
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
      <div className='bounce1'>
        <div className="ll-wrap t">
          <img className="ll f" src={ugly}></img>
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
            <a href='https://etherscan.io/token/0x9872fcc6cc3ccf7aad36b081b6d5bb0b468b8478'><img src={es} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://t.me/+Go3XKiHO0IA0Yzkx'><img src={tg} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://twitter.com/GokuEthCoin'><img src={tw} width='120px'/></a>
          </div>
          <div className='item'>
            <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x1dbf244d47651d40ecbeb791d2a3856572d5e47b'><img src={dx} width='105px'/></a>
          </div>
        </div>
      </header>
        <h1 className='bottom front'>шайлушай, Real Smurf Cat</h1>
        <h1 className='bottom front'>HE IS ON HIS WAY</h1>
        <img src={td} width='500vw' className='front'/>
        <h1 className='bottom front'>the only smart blue smurf cat</h1>
        <img src={db} width='500vw' className='front'/>
        <h1 className='top front'>смешной мем (funy)</h1>
        <p className='title front'>LIQUIDITY BURNED, CONTRACT RENOUNCED, ZERO TAX.</p>
      </body>
    </div>
  );
}

export default App;
