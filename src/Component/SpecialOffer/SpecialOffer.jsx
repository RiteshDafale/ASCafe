import React, { useEffect } from 'react'

function SpecialOffer() {
    useEffect(()=>{
 document.title="Today's Offer"
    },[])
  return (
    <div>
      SpecialOffer
    </div>
  )
}

export default SpecialOffer
