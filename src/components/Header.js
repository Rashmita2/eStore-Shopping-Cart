import React from 'react'
import './Header.css'

function Header({title}) {

    return (
        <div className="App-header">
            <h1 className="h1-style">{title}</h1>
        </div>
    )
}

export default Header
