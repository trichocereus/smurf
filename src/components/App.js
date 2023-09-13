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
      <h1 className='top'>шайлушай</h1>
        <div className='container'>
          <a className='card'>
            <img src={logo} className="App-logo" alt="logo" width='500vw'/>
          </a>
        </div>
        <h1 className='top'>HE IS REAL.</h1>
        <header className="App-header">
        <div className='container'>
          <div className='item'>
            <a href='https://etherscan.io/token/0x9872fcc6cc3ccf7aad36b081b6d5bb0b468b8478'><img src={es} width='60px'/></a>
          </div>
          <div className='item'>
            <a href='https://t.me/+Go3XKiHO0IA0Yzkx'><img src={tg} width='60px'/></a>
          </div>
          <div className='item'>
            <a href='https://twitter.com/GokuEthCoin'><img src={tw} width='60px'/></a>
          </div>
          <div className='item'>
            <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x1dbf244d47651d40ecbeb791d2a3856572d5e47b'><img src={dx} width='55px'/></a>
          </div>
        </div>
      </header>
        <h1>шайлушай, Real Smurf Cat</h1>
        <p className='main'>
          In English language, Shailushai, is a blue creature that looks like a mix between a cat, a Smurf and a mushroom. He’s going on his merry little way along the floor of a lush forest. Shailushai is heartbreakingly cute and weird. In Russian, the word Shailushai is gibberish, however it is close to a word that means “scamp”.
        </p>
        <img src={td} width='500vw'/>
        <p className='main2'>
        The little blue smurf cat has taken over the internet, and his appearance is almost always paired with the Alan Walker song “The Spectre”. The idea emerged in 2014 from the mind of Nate Hallinan, who wondered what Smurfs would look like if they were actually real.
        </p>
        <img src={db} width='500vw'/>
        <p className='main'>
          “We live. We Love. We Lie”
        </p>
        <p className='title'>LIQUIDITY BURNED, CONTRACT RENOUNCED, ZERO TAX.</p>
      </body>
    </div>
  );
}

export default App;
