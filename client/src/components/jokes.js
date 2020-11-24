import React, { useState } from 'react'

function Jokes (props) {
    const [clicked, setClick] = useState(false)

    function isClick() {
        if(clicked === true) {
            setClick(false)
        } else {
            setClick(true)
        }

      }

    const { joke } = props
    return (
        <div onClick={() => isClick()} className="card mb-2 shadow-sm" type='button' style={{width:'25rem'}}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '11px'}}>{joke.category}</h6>
                <p className="card-text" style={{fontSize: '14px', marginBottom:'0rem'}}>
                {joke.setup}
                </p>
                {clicked === true &&
                    <p className="card-text text-right text-muted" style={{fontSize: '14px', marginBottom:'0rem'}}>
                        {joke.delivery}
                    </p>
                }
            </div>
        </div>
    )
}

export default Jokes