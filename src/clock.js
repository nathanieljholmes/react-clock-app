import React, { useState, useEffect } from "react"
import sun from './assets/desktop/icon-sun.svg'
import moon from './assets/desktop/icon-moon.svg'
import dayBG from './assets/desktop/bg-image-daytime.jpg'
import nightBG from './assets/desktop/bg-image-nighttime.jpg'

export default function ClockZone() {
    let date = new Date(Date.now())
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let clock = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
    const [icon, setIcon] = useState(sun)
    const [background, setBackground] = useState(dayBG)
    const [time, setTime] = useState(clock)
    const [timeZone, setTimeZone] = useState('Time Zone')
    const [city, setCity] = useState('city')
    const [country, setCountry] = useState('country')
    const [greeting, setGreeting] = useState('Good Morning, It is currently')
    
    useEffect(() => {
        fetch('https://freegeoip.app/json/')
            .then((res) => res.json())
            .then((data) => {
                setCity(data.city);
                setCountry(data.country_code)
            }).catch((err) => console.log(err))

    }, [city, country])

    useEffect(() => {
        fetch("http://worldtimeapi.org/api/ip")
            .then((res) => res.json())
            .then((data) => {
                if (hours <= 12) {
                    setGreeting('Good Morning, It is currently')
                    setIcon(sun)
                    setBackground(dayBG)
                   
                } else if (hours >= 12 && hours <= 18) {
                    setGreeting('Good Afternoon, It is currently')
                    setIcon(sun)
                    setBackground(dayBG)
                    
                }
                else {
                    setGreeting('Good Evening, It is currently')
                    setIcon(moon)
                    setBackground(nightBG)
                   
                }
                setTimeZone(data.abbreviation);
            })
    }, [clock, timeZone])

    useEffect(() => {
        setInterval(() => {
            setTime(Date.now());
        }, 1000);
    }, [])

    document.documentElement.style.background = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})  no-repeat center center fixed`
    document.documentElement.style.backgroundSize = `cover`

    return (
        <div>
            <div className="greeting-container">
                <img src={icon} alt="refresh" width="24" height="24" />
                <h4>{greeting}</h4>
            </div>

            <div className="clock-container">
                <h1>{clock}</h1>
                <h4>{timeZone}</h4>
            </div>
            <h3>In {city}, {country}
            </h3>

        </div>
    )
}