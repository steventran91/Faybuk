import React from 'react';

const ErrorTip = (props) => {
    return (
        <div className={`error=${props.class}`}>{props.error}</div>
    )
}

export default ErrorTip; 