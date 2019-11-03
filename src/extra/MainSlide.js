import React from 'react'
import './main.css'

const MainSlide = (props) => {
    const setSlideMain = () => {
        props.setSlide(false)
    }
    const setSlideMenu = () => {
        props.setSlide(true)
    }
    const toggleSlide = () => {
        props.setSlide(props.slide ? false:true)
    }
    
    return (
        <div className='content-main'>
            <div id="upper"></div>
            <div id="lower">
                <h1>Wow i cant believe it worked!</h1>
                <button onClick={() => {console.log(props)}}><span>This logs!</span></button>
                <button onClick={setSlideMenu}><span>This sets slide to true</span></button>
            </div>
            
        </div>
    )
}

export default MainSlide
