import React, { useState } from "react";

const TextForm = (props) => {


    const [text, setText] = useState("Enter text here");

    // Change into UppperCase
    const handleUpperClick = () => {
        setText('You have clicked on handleUpClick')
        let newText = text.toUpperCase();
        setText(newText);
    }


    // Change into LowerCase
    const handleLowerClick = () => {
        setText('You have clicked on handleUpClick')
        let newText = text.toLowerCase();
        setText(newText);
    }


    // Change into Clear All Text
    const handleClearClick = () => {
        setText('');
    }


    // Reverse Text
    const handleReverseClick = () => {
        let newText = text.split('').reverse().join("");
        setText(newText);
    }



    const handlerOnChange = (event) => {
        setText(event.target.value)
    }

    // Copy All Text
    const handleCopyText = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // It Remove Extra spaces
    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // For Selecting all text
    const handleSelectText = () => {
        let text = document.getElementById('myBox');
        text.select();
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 col-sm-15">
                    <textarea className="form-control"
                        id="myBox"
                        rows="7"
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        value={text}
                        onChange={handlerOnChange}

                    ></textarea>
                </div>
                <div className="my-3">
                    <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>
                    <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse All</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Extra spaces</button>
                    <button className="btn btn-primary mx-1" onClick={handleSelectText}>Select Text</button>
                </div>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} words And {text.length} chracters</p>
                <p> {0.008 * text.split(" ").length} Minutes read</p>
                <h1>Preview</h1>
                <p>{text.trim().length > 0 ? text : "Enter something to preview it here"}</p>
            </div>

        </>
    )
}

export default TextForm;