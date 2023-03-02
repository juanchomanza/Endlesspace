import React from 'react'
import './phrases.css'

import allPhrases from './phrases.json'

export const Phrases = ({position}) => {
    console.log(allPhrases)
    console.log(position)
  return (
    <div className='phrases__container'>
      <div className='phrases__back'>
        <div className='phrase__brand'>
          <h1>Endles<span className='phrase__brand__space'>space</span></h1>
        </div>
        <div className='phrases__text'>
            <h4>{allPhrases[position].phrase}</h4>
        </div>
        <div className='phrases__autor'>
            <h5>{allPhrases[position].author}</h5>
        </div>
      </div>
    </div>
  )
}
