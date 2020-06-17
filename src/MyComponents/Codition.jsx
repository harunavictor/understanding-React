import React, { useState } from 'react'

const num = Math.random() * 5

const Codition = () => {
    const[count,setCount]=useState(0)
    return (
        <>
            {num > 10 ? <p>good number</p> : <div><p>Bad number</p> 
            </div>}
            <h2>Your number is :{num}</h2>

            <button onClick={()=> setCount(count+1)} >{count}</button>
        </>
    )
}

export default Codition
