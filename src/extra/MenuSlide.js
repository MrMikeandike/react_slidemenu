import React from 'react'
import './menu.css'

const MenuSlide = (props) => {
    const setSlideMain = () => {
        props.setSlide(false)
    }
    return (
        <div className='content-menu'>
            <div id="upper"></div>
            <div id="lower">
                <h>DASDASDASDASDASA</h>
                <h3>Seriously what the heck!</h3>
                <button onClick={() => {console.log(props)}}><span>This logs!</span></button>
                <button onClick={setSlideMain}><span>This sets slide to false</span></button>
            </div>
            
        </div>
    )
}



export default MenuSlide
