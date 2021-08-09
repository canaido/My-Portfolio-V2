import React from 'react'
import spinner from '../../content/spinner.gif'

const Spinner = () => {
    return (
        <div className="flex justify-center bg-gold-2900">
            <img src={spinner} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
        </div>
    )
}

export default Spinner