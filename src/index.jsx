import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss' // Importing stylesheet to HTML


// TEST: Inserting hello worlds into HTML
const   HelloJavaScript = () => <h1>Hello, JavaScript!</h1> // JavaScript hello world
import  HelloTypeScript from './app.tsx'                    // TypeScript hello world


ReactDOM.render(
    // React.Fragment = A component to return multiple elements
    <React.Fragment>
        <HelloJavaScript/>
        <HelloTypeScript/>
    </React.Fragment>,
    document.getElementById('root')
)