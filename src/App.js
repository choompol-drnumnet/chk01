import React from 'react';
import {useState,useEffect} from 'react';
import img from './image_kan-256x256.png';
import Iframe from 'react-iframe';
//import img from './image_kan-50x50.png';
//import './App.css';
//import QRCode from 'react-qr-code';
//import QRCode from 'qrcode.react';
//var QRCode = require('qrcode-react');
//import QrReader from 'react-qr-scanner';

import { QRCode } from 'react-qrcode-logo';
import html2canvas from 'html2canvas';
import QrReader from 'react-qr-reader';

const App = () => {
  const [data,setData] = useState('');
  const [mode, setMode] = useState(1);
  const [width, setWidth] = useState(100);

  useEffect(()=> {
    setWindSize();
    window.addEventListener('resize', setWindSize);
    return ()=> {
      window.removeEventListener('resize', setWindSize);
    };
  },[]);
  const loadQR = () => {
    if(mode!=1) return;

    const qrpict = document.getElementById('printqrcode');
    html2canvas(qrpict).then(function(canvas) {
      const pngUrl = canvas
        .toDataURL("image/png");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "store-qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }); 
  }
  const setWindSize = () => {
    setWidth(window.innerWidth);
  }
  const handleScan = dt => {
    setData(dt);
    if(dt!==undefined && dt!=='') {
      if(dt.startsWith("https://")) {
        setMode(1);
      }
    }
  }
  const handleError = err => {
    console.error(err);
  }
  return (
    <div id='qr2' style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
      <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <div onClick={(e)=>setMode(1)} style={{
            padding: 10,
            backgroundColor: (mode==1? 'lightgreen':'lightgrey'),
          }}>1</div>
        <div onClick={(e)=>setMode(2)} style={{
            padding: 10,
            backgroundColor: (mode==2? 'lightgreen':'lightgrey'),
          }}>2</div>
        <div onClick={(e)=>setMode(3)} style={{
            padding: 10,
            backgroundColor: (mode==3? 'lightgreen':'lightgrey'),
          }}>3</div>
        <div onClick={(e)=>loadQR()} style={{
            padding: 10,
            backgroundColor: (mode==3? 'lightgreen':'lightgrey'),
          }}>QRMK</div>
      </div>
      { mode==1 && //==== MODE 1
        <header id='printqrcode' style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
          backgroundColor: 'lightblue',
          }}>
          <p>{data}</p>
          <QRCode id='xprintqrcode' style={{
              display: 'flex',
            }}
            size={width*3/4}
            logoImage={img}
            value="https://github.com/gcoro/react-qrcode-logo" />
        </header>
      }
      { mode==2 && //=================== MODE 2
        <header style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
          }}>
          <div>SCAN: {data}</div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
            facingMode='environment'
          />
        </header>
      { mode==3 && //=================== MODE 3
        <header style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)',
          }}>
          <div>CHAT: {data}</div>
        </header>
      }
    </div>
  );
}


export default App;
