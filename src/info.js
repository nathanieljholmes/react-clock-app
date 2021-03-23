import React, { useState, useEffect } from "react"

export default function Info() {
    let date = new Date(Date.now())
    let hours = date.getHours()
    const [timeZone, setTimeZone] = useState('Time Zone')
    const [DayOfYear, setDayOfYear] = useState('0')
    const [DayOfWeek, setDayOfWeek] = useState('0')
    const [WeekNum, setWeekNum] = useState('0')
    const [expandStyle, setExpandStyle] = useState("body-expand")
    const [fontStyle, setfontStyle] = useState("fade-style")
    
    useEffect(() => {
        fetch('https://freegeoip.app/json/')
            .then((res) => res.json())
            .then((data) => {
                setTimeZone(data.time_zone)
                console.log(data)
            }).catch((err) => console.log(err))

    }, [])

    useEffect(() => {
        fetch("http://worldtimeapi.org/api/ip")
            .then((res) => res.json())
            .then((data) => {
                if (hours < 12) {
                    setExpandStyle("body-expand")
                    setfontStyle("fade-style")
                } else if (hours > 12 && hours < 18) {
                    
                    setExpandStyle("body-expand")
                    setfontStyle("fade-style")
                }
                else {
                    setExpandStyle("dark-body-expand")
                    setfontStyle("white-style")
                }
                console.log(data);
                setWeekNum(data.week_number)
                setDayOfYear(data.day_of_year)
                setDayOfWeek(data.day_of_week)
            })
            const expandedBG = document.getElementById(`lower-container`);
            expandedBG.classList.add(expandStyle)
    }, [])
    return (
        <div className="col-container">
            <div className="col bar">
                <div className="info-container">
                    <h4 className={fontStyle} >Current Timezone</h4>
                    <h2 className={fontStyle}>{timeZone}</h2>
                </div>
                <div className="info-container">
                    <h4 className={fontStyle}>Day of the Year</h4>
                    <h2 className={fontStyle}>{DayOfYear}</h2>
                </div>
            </div>
            <div className="col">
                <div className="info-container">
                    <h4 className={fontStyle}>Day of the Week</h4>
                    <h2 className={fontStyle}>{DayOfWeek}</h2>
                </div>
                <div className="info-container">
                    <h4 className={fontStyle}>Week Number</h4>
                    <h2 className={fontStyle}>{WeekNum}</h2>
                </div>
            </div>
        </div>
    )
}