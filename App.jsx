// This file is called from index.html to render the app.
import React from 'react'
import ReactDom from 'react-dom'

// Import Components
import Layout from './src/components/Layout'

// Render the app
const app = document.getElementById('app')
ReactDom.render(<Layout />, app)
