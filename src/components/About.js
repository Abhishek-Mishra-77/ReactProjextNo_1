import React, { useState } from "react";

const About = (props) => {


    let myStyle = {
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor:props.mode === 'dark' ? 'rgb(34 74 104)' : 'white'
    }


   


    return (
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className="my-3">About Us</h1>
            <div class="accordion" id="accordionExample" style={myStyle}>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong> Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle}>
                            TextUtils give you a way to analyze your text quickly and efficiently. Be it word count ,
                            character count or
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <strong>  Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle}>
                            TextUtils is a free characters counter tool provides instant character count & word count
                            statistic for a given text. TextUtils reports the number of words and characters. Thus it is
                            suitable for writing text with word / character limit.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compotible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle}>
                            Browser Compotible
                            This word counter software works in any web browser such as Chrome , Firefox, Internet Explorer, safari , Opera. It
                            suits to count characters in facebook , blog , books, excel document , pdf document , essays , etc.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;