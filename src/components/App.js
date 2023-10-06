import React, { useState, useEffect } from 'react';
import Modal from './Modal.js';
import logo from '../assets/full.png';
import es from '../assets/es.png'
import tg from '../assets/tg.png'
import tw from '../assets/tw.png'
import dx from '../assets/dx.png'
import td from '../assets/td.png'
import cmc from '../assets/cmc.png'
import cg from '../assets/cg.png'
import bg from '../assets/bg.png'
import pl from '../assets/pl.png'
import ae from '../assets/ae.png'
import kym from '../assets/kym.png'
import mx from '../assets/mx.png'
import gif from '../assets/gif.GIF'
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
        {/* <div className="dropdown">
          <button className="dropbtn">about</button>
          <div className="dropdown-content-container">
            <a href='https://knowyourmeme.com/memes/%D1%88%D0%B0%D0%B9%D0%BB%D1%83%D1%88%D0%B0%D0%B9-smurf-cat'><img src={kym} width='80px'/>history</a>
            <a href='https://flooz.xyz/trade/how-to-buy/0xfF836A5821E69066c87E268bC51b849FaB94240C'><img src={fl} width='80px'/>buy with card</a>
            <a href='https://twitter.com/smurfcateth'><img src={tw} width='80px'/>memes</a>
            <a href='https://t.me/smurfcateth'><img src={tg} width='80px'/>smurf chat</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">token info</button>
          <div className="dropdown-content-container">
            <a href='https://etherscan.io/token/0xff836a5821e69066c87e268bc51b849fab94240c'><img src={es} width='80px'/>etherscan</a>
            <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x977c5fcf7a552d38adcde4f41025956855497c6d'><img src={dx} width='70'/>dextools</a>
            <a href='https://coinmarketcap.com/currencies/real-smurf-cat-eth/'><img src={cmc} width='80px'/>coinmarketcap</a>
            <a href='https://www.coingecko.com/en/coins/real-smurf-cat'><img src={cg} width='80px'/>coingecko</a>
          </div>
        </div> */}
        <div className="dropdown">
          <button className="dropbtn">Buy on exchange</button>
          <div className="dropdown-content-container">
            <a href='https://www.mexc.com/exchange/SMURFCAT_USDT?_from=search_spot_trade'><img src={mx} width='80px'/>MEXC</a>
            <a href='https://www.bitget.com/spot/SMURFCATUSDT?type=spot'><img src={bg} width='80px'/>BITGET</a>
            <a href='https://poloniex.com/trade/SMURFCAT_USDT?type=spot'><img src={pl} width='80px'/>POLONIEX</a>
            <a href='https://ascendex.com/en/cashtrade-spottrading/usdt/smurfcat'><img src={ae} width='80px'/>ASCENDEX</a>
          </div>
        </div>
        {/* <div className="dropdown">
          <button className="dropbtn">where to buy</button>
          <div className="dropdown-content-container">
            <a href='#here'><img src={here} width='80px'/>on this site</a>
            <a href='https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xfF836A5821E69066c87E268bC51b849FaB94240C'><img src={uni} width='80px'/>uniswap</a>
            <a href='https://www.bitget.com/spot/SMURFCATUSDT?type=spot'><img src={bg} width='80px'/>bitget</a>
            <a href='https://poloniex.com/trade/SMURFCAT_USDT?type=spot'><img src={pl} width='80px'/>poloniex</a>
            <a href='https://ascendex.com/en/cashtrade-spottrading/usdt/smurfcat'><img src={ae} width='100px'/>ascendex</a>
            <a href='https://www.mexc.com/exchange/SMURFCAT_USDT?_from=search_spot_trade'><img src={mx} width='100px'/>mexc</a>
          </div>
        </div> */}
      <div className='dropdown'>
        <a href='https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xfF836A5821E69066c87E268bC51b849FaB94240C'>
          <button className='uni'>Buy on UniSwap</button>
        </a>
      </div>
      <div className='dropdown'>
        <a href='https://flooz.xyz/trade/how-to-buy/0xfF836A5821E69066c87E268bC51b849FaB94240C'>
          <button className='flooz'>Buy with card</button>
        </a>
      </div>
      </div>
      <body>
          <a>
            <img src={logo} className="App-logo" alt="logo" width='500vw'/>
          </a>
        <h1 className='top front'>HE IS REAL.</h1>
        <div className='container'>
          <a href='https://etherscan.io/token/0xff836a5821e69066c87e268bc51b849fab94240c' className='item'>
            <img src={es} width='40px' alt='etherscan icon' />
            <span>Etherscan</span>
          </a>
          <a href='https://www.dextools.io/app/en/ether/pair-explorer/0x977c5fcf7a552d38adcde4f41025956855497c6d' className='item'>
            <img src={dx} width='40px' alt='dextools icon' />
            <span>DEXTools</span>
          </a>
          <a href='https://coinmarketcap.com/currencies/real-smurf-cat-eth/' className='item'>
            <img src={cmc} width='40px' alt='cmc icon' />
            <span>CMC</span>
          </a>
        <a href='https://www.coingecko.com/en/coins/real-smurf-cat' className='item'>
          <img src={cg} width='50px' alt='coingeco icon' />
          <span>CoinGecko</span>
          </a>
        </div>
        <div className='container'>
          <a href='https://knowyourmeme.com/memes/%D1%88%D0%B0%D0%B9%D0%BB%D1%83%D1%88%D0%B0%D0%B9-smurf-cat' className='item'>
            <img src={kym} width='40px' alt='history icon' />
            <span>History</span>
          </a>
          <a href='https://twitter.com/smurfcateth' className='item'>
            <img src={tw} width='40px' alt='twitter icon' />
            <span>Twitter</span>
          </a>
          <a href='https://t.me/smurfcateth' className='item'>
            <img src={tg} width='40px' alt='telegram icon' />
            <span>Telegram</span>
          </a>
        </div>
      <p className='title'><span className='blue'>SMURFCAT</span> is a memecoin launched on the ethereum blockchain. he is so cute! this little guy is just going on his jolly way!<br/><br/>the token was created as a tribute to the smurf cat internet meme originally created by nate hallinan, and newly popularized by tiktok.</p>
      <img src={gif} className='dwayne'/>
      <p className='faqt'>Why smurfcat.eth.limo?</p>
      <p className='faq'>This website is hosted on the <span className='blue'>interplanetary file system</span> and routed through <span className='blue'>Ethereum</span> Name Service. This makes it completely <span className='blue'>decentralized</span> by nature!</p>
      <img src={td} width='400px'/>
      <p className='title front'>ZERO TAX, CONTRACT RENOUNCED,<br/>100% OF SUPPLY SENT TO UNISWAP & LP BURNT</p>
      <p className='fairy'>concept by nate hallinan 2011, made possible by dmitri</p>
      <p className='blue smol'>real smurf cat contact: realsmurfcat@outlook.com</p>
    </body>
  </div>
  );
}

export default App;
