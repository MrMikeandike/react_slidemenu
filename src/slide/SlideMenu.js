import React, {useState} from 'react'
import '../styles/SlideMenu.css'
// import PropTypes from 'prop-types'

const SlideMenu = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    let slideClass = (showMenu ? "slide-menu":"slide-main")
    return (
        <div className="slidingmenu-div">
            <div className={`slidingmenu-double-width-container ${slideClass}`}>
                <div className={`slidingmenu-main`}>
                    {props.main(showMenu, setShowMenu)}
                </div>
                <div className="slidingmenu-menu">
                    {props.menu(showMenu, setShowMenu)}
                </div>
            </div>
            
        </div>
    )
}

// SlideMenu.propTypes = {

// }

export default SlideMenu
