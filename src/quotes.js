import React, { useState, useEffect } from "react"
import refreshIcon from './assets/desktop/icon-refresh.svg'


export default function QuotesGenerator() {
    const [quotes, setQuotes] = useState()
    const [author, setAuthor] = useState()
    useEffect(() => {
        fetchQuotes()
    }, [])

    const fetchQuotes = async () => {
        const results = await fetch("https://api.quotable.io/random").catch((err) => console.log(err))
        const data = await results.json();
        setQuotes(data.content);
        setAuthor(data.author);

        console.log(data)
    };

    return (
        <div className="false-margin">
            <div>
            <div className="quotes-container">
                <p> {quotes}</p>
                <div onClick={fetchQuotes}>
                    <img src={refreshIcon} alt="refresh" width="16.67" height="16.67" />
                </div>
            </div>
            <h5>{author}</h5>
            </div>
            <div></div>

        </div>
    )
}