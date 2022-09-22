import React from 'react'
import "./quoteSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

const QuoteSection = () => {
  return (
    <div className="section quote">
       <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} />Food brings people together on many different levels. It's nourishment of the soul and body: it's truly love.</p>
       <p className="quote-author">- Giada De Laurentiis</p>
    </div>
  )
}

export default QuoteSection