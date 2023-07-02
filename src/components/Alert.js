import React from 'react';

const Alert = (props) => {

    const capitalLetter = (word) => {
        const lowerLetter = word.toLowerCase();
        return lowerLetter.charAt(0).toUpperCase() + lowerLetter.slice(1);
    }

    return (
        <div style={{height:'50px'}}>
          {  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalLetter(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert;