import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import QRcode from 'qrcode.react';

function QRgenerator() {
  const [qr, setQr] = useState('LordRanchoatos');

  const handleChange = (event) => {
    setQr(event.target.value);
  };
  const downloadQR = () => {
    const canvas = document.getElementById('myqr');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'myqr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div>
      <Link to="/">link to home</Link>
      <span>QR Generator</span>

      <div style={{ marginTop: 30 }}>
        <input
          onChange={handleChange}
          style={{ width: 320 }}
          value={qr}
          label="QR content"
          size="large"
          variant="outlined"
          color="primary"
        />
      </div>

      <div>
        {qr ? (
          <QRcode id="myqr" value={qr} size={320} includeMargin={true} />
        ) : (
          <p>No QR code preview</p>
        )}
      </div>
      <div>
        {qr ? (
          <div container>
            <div item xs={10}>
              <input
                style={{ fontSize: 18, width: 250, height: 100 }}
                rowsMax={4}
                defaultValue={qr}
                value={qr}
              />
            </div>
            <div item xs={2}>
              <button
                onClick={downloadQR}
                style={{ marginLeft: 10 }}
                color="primary"
              >
                download
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default QRgenerator;
