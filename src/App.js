import React from 'react';
import {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
//import QRCode from 'react-qr-code';
//import { QRCode } from 'react-qrcode-logo';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import QrReader from 'react-qr-reader';
//import QrReader from 'react-qr-scanner';

const App = () => {
  const saveQr2 = () => {
    const input = document.getElementById('qr2');
    alert(input);
    html2canvas(document.body).then(function(canvas) {
        //document.body.appendChild(canvas);
      const pngUrl = canvas
        .toDataURL("image/png");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "123456.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }
  const downloadQR = () => {
    const canvas = document.getElementById("qrid");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
alert(canvas);
  }
  const handleScan = data => {
    console.error(data);
  }
  const handleError = err => {
    console.error(err);
  }
  const [data,setData] = useState('');
  return (
    <div id='qr2' className="App">
      <header className="App-header">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
          facingMode='environment'
        />
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
