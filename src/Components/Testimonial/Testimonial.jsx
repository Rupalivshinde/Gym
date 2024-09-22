import React from 'react'
import './Testimonial.css'
import logo from '/src/assets/logo.png';

function Testimonial() {
    return (
        <>
            <div className='testimonial' id='testimonial'>
                <div className="testimonial_container">
                    <h5>Testimonial</h5>
                    <h2><span>What they</span></h2>
                    <h3>say about us</h3>
                    <p>I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!</p>
                    <h6><span>MATHEW HENDRICKSON</span>- ENTREPRENEUR</h6>
                    <img src="https://fitclub-1my.pages.dev/static/media/t-image1.c16c2c261034cf78ee57.png" alt="" />
                    <h2 className='levelup'><span>Ready to </span>
                        Level up <br />
                        your body
                        <span> with us? </span> </h2>
                    <div className="input_container">
                        <input type="text" value="" placeholder="Enter Your Email Addresss Here" />
                        <button type="submit">Join</button>
                    </div>

                </div>

                <div className="img_overlay"></div>
                <div className="box_overlay"></div>
            </div>
            <hr />


        </>

    )
}

export default Testimonial