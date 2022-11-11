import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Papa from 'papaparse';

function QRscanner() {
  // const users = ['LordRanchoatos', 'Emma', 'Rexy', 'Fiyin'];
  const [ users, setUsers ] =useState([])
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

  const handleUpload = () => {
    Papa.parse(document.getElementById('uploadfile').files[0],
      {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
          
          // setUsers(list)
        }
      }
    )
    console.log(users)
  }

  // const handleView = () => {
  //   setVerified('true')
  // }

  return (
    <div>
      <input type='file' id='uploadfile' accept='.csv' />
      <button onClick={handleUpload} id='uploadconfirm'>Upload File</button>



      {verified && data !== '' ? (
        <div>
          <h1>verified</h1>
        </div>
      ) : (
        <div
          style={{
            margin: 'auto',
            width: '400px',
          }}
        >
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
        </div>
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
