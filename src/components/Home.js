import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'

function Home() {
    return (
        <div className="App">
            <Header />
            <div className="app__body">
                <Sidebar />
                <Feed />
                {/* Widgets */}
                {/* <Chat /> */}
            </div>
        </div>
    )
}

export default Home
