// import React, { useEffect, useRef } from 'react'
import './Hero.css'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import hero_img from '/src/assets/hero_image.png'
import circle_img from '/src/assets/hero_image_back.png'


function Hero() {


    return (
        <>
            <Nav />

            <div className="hero" id='home'>
                <div className="circle"></div>

                <div className="left">
                    <div className="scroll"
                    >

                        <p>The Best Fitness Club in Town</p>
                        <div className="scroller"></div>
                    </div>

                    <div className="container">
                        <h1><span>SHAPE</span> YOUR</h1>
                        <h1>IDEAL BODY</h1>
                        <p>In here we will help you to shape and build your ideal body and live up your life to the fullest</p>
                    </div>

                    <div className="number">
                        <div className="num1">
                            <h2>+ 140</h2>
                            <h3>expert coaches</h3>
                        </div>
                        <div className="num2">
                            <h2>+ 978</h2>
                            <h3>Members joined</h3>
                        </div>
                        <div className="num3">
                            <h2>+ 50</h2>
                            <h3>fitness programs</h3>
                        </div>
                    </div>

                    <div className="btn_container">
                        <button className='btn1'>Get Started</button>
                        <button className='btn2'>Learn More</button>
                    </div>
                </div>

                <div className="right">
                    <div className="circle_img">
                        <img src={circle_img} alt="Circle Background" />
                    </div>
                    <div className="img_container">
                        <img src={hero_img} alt="Hero" />
                    </div>
                </div>
            </div>

            <Card />
        </>
    )
}

export default Hero
