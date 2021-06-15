import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss' // Importing stylesheet to HTML

// TEST: Inserting "Hello world!" into div.root
ReactDOM.render(
    React.createElement('div', null, `Hello world!`),
    document.getElementById('root')
)