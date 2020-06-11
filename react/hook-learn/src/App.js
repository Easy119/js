import React, { useState, useEffect } from 'react';
import Effect from "./view/useEffect"



export default () => {

  const [count, setCount] = useState(0)

  useEffect(() => {

    setTimeout(() => {
      setCount(x => x + 1)
    }, 1000)


  }, [count])

  return <div>
    <h1> {count} </h1>
    <Effect />
  </div>

};
