import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRscanner() {
  const users = ['LordRanchoatos', 'Emma', 'Rexy', 'Fiyin'];
  const [data, setData] = useState('No result');
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    console.log(data);
    for (let i = 0; i < users.length; i++) {
      if (data === users[i]) {
        // handleView()
        setVerified(!verified);
        return;
      } else {
        // console.log('false')
        setVerified(false);
      }
      console.log(verified);
    }
  }, [data]);

  // const handleView = () => {
  //   setVerified('true')
  // }

  return (
    <div
      style={{
        margin: 'auto',
        width: '400px',
      }}
    >
      {verified && (data !== '') ? (
        <div>
          <h1>verified</h1>
        </div>
      ) : (
        <QrReader
          ViewFinder={function noRefCheck() {}}
          videoId="video"
          scanDelay={5000}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          // style={{ height: 240+ "px", width: 320 + 'px'}}
        />
      )}
      <p>{verified ? 'Valid ticket' : 'User Not Found'}</p>
      <p>{verified}</p>
      <p>{data}</p>
      <button
        onClick={() => {
          setData('');
          setVerified(false);
        }}
      >
        Scan
      </button>
    </div>
  );
}

export default QRscanner;
