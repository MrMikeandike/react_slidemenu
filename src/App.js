import React from 'react';
import './styles/slidingApp.css';
import SlideMenu from './slide/SlideMenu';
import MainSlide from './extra/MainSlide';
import MenuSlide from './extra/MenuSlide';

const App = () => {

    return (
        <div className="center-container">
            
            <SlideMenu main={(slide, setSlide) => <MainSlide slide={slide} setSlide={setSlide}/>} menu={(slide, setSlide) => <MenuSlide  slide={slide} setSlide={setSlide}/>}/>
        </div>
    );
}

export default App