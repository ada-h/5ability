import React from 'react'

const FirstStep = () =>{

    return(
        <div>
            <div className=" headings text-center">
                <h2> Take the first step</h2>
                <p className="sub-heading"> Whatever your goal, here are a few places to get started</p>
            </div>
            <div className="slider-box">       
                <div className="slider-hider" style="transition-duration:400ms;">
                    <div className="slide current">
                        <a href="">
                            <div className="text">
                                <h4>
                                    <small> Build Your Brand</small><br/>
                                    Logo Design
                                </h4>
                            </div>
                            <img className="linked-images img-responsive" src="images/desktop_subcategory_logo.jpg"/>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="#">
                            <div className="text">
                                <h4>
                                    <small> Customize Your Site</small><br/>
                                    Wordpress
                                </h4>
                            </div>
                            <img className="img-responsive linked-images" src="images/desktop_subcategory_wordpress.webp"/>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="#">
                        <div className="text">
                            <h4>
                                <small> Share Your Message</small><br/>
                                Voice Over
                            </h4>
                        </div>
                            <img className="linked-images img-responsive" src="images/desktop_subcategory_voiceover.webp"/>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="">
                            <div className="text">
                            <h4>
                                <small> Engage Your Audience</small><br/>
                                Whiteboard
                            </h4>
                            </div>
                            <img className="linked-images img-responsive" src="images/desktop_subcategory_whiteboard.jpg">
                        </a>
                    </div>
                    <div className="slide">
                        <a href="#">
                            <div className="text">
                            <h4>
                                <small> Reach More Customers</small><br/>
                                Social Media
                            </h4>
                            </div>
                            <img className="linked-images img-responsive" src="images/desktop_subcategory_social_media.webp"/>
                        </a>
                    </div>
                    <div className="slide">
                        <a href="">
                            <div className="text">
                            <h4>
                                <small> Unlock Growth Online</small><br/>
                                SEO
                            </h4>
                            </div>
                            <img className="linked-images img-responsive" src="images/desktop_subcategory_seo.webp"/>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    )
}