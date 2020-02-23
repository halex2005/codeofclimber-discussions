import React from 'react'
import logo from './logo.svg'
import './App.css'
import { SomeView } from '@my/components/dist'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SomeView />
                <div>Web2</div>
            </header>
        </div>
    )
}

export default App
