import React from 'react';

const Alert = (props) => {

    const capitalLetter = (word) => {
        const lowerLetter = word.toLowerCase();
        return lowerLetter.charAt(0).toUpperCase() + lowerLetter.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalLetter(props.alert.type)}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;