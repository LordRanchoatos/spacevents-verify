import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
        <h3>Spacevents Ticket verification</h3>
        <Link to="/qr_generator">generate your code</Link><br/>
        <Link to="/qr_scanner">verify ticket</Link>
    </div>
  )
}

export default Home