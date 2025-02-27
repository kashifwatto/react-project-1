import React from 'react'

export default function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='content-part'>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className='button-part'>
                        <button className='button-part-1'>Shop Now</button>
                        <button className='button-part-2'>Category</button>

                    </div>
                    <div className="shoping">
                        <p>Also Available On</p>
                        <div className="brands-logo">
                            <img src="/images/flipkart.png" alt="flipkart.png" />
                            <img src="/images/amazon.png" alt="amazon.png" />
                        </div>
                    </div>
                </div>
                <div className='image-part'>
                <img src="/images/shoe_image.png" alt="amazon.png" />

                </div>
            </div>
        </>
    )
}
