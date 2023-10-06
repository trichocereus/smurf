import React, { useState, useEffect } from 'react';
import '../Modal.css';
import audioFile from '../assets/audio.mp3'

function WelcomePage() {
    const [audioPlaying, setAudioPlaying] = useState(true)
    let audio = (audioFile)

    const start = () => {
      window.location.href = '/home';
        setAudioPlaying(false)
    }

  return (
    <a onClick={start}>
        <div className="modal">
            <div className="modal-content">
                <p className='text'>Welcome to the home of <span className='blue1'>SHAILUSHAI</span></p>
                <p className='enter'>(click anywhere)</p>
                {audioPlaying && (
                <audio autoplay loop>
                    <source src={audioFile} type='audio/mpeg' />
                </audio>
                )}
            </div>
        </div>
    </a>
  );
}

export default WelcomePage;