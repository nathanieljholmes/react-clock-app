import React, { useState, useEffect } from "react"
import './App.css';
import QuotesGenerator from "./quotes.js"
import ClockZone from "./clock.js"
import MoreInfo from "./moreInfo.js"
import Info from "./info.js"

export default function App() {

  const [expanded, setExpanded] = useState(false)

  return (
    <div className="root">
      <div className="body-main">
        <div className="main-container">
          <div className="content-container">
            {!expanded && <QuotesGenerator />}
            <div className="clock-content">
              <ClockZone />
              <MoreInfo setExpanded={setExpanded} />
            </div>
          </div>
        </div>
      </div>
      {expanded && <div id="lower-container"><Info /></div>}
    </div>
  )
}

