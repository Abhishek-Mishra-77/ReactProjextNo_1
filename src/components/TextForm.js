import React, { useState } from "react";

const TextForm = (props) => {


    const [text, setText] = useState("Enter text here");

    const handleUpperClick = () => {
        setText('You have clicked on handleUpClick')
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        setText('You have clicked on handleUpClick')
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handlerOnChange = (event) => {
        
        setText(event.target.value)
    }


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"
                    id="myBox"
                    rows="3"
                    value={text}
                    onChange={handlerOnChange}

                ></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary " onClick={handleLowerClick}>Convert to LowerCase</button>
        </div>
    )
}

export default TextForm;