import React from 'react';

export default (props) =>(
    <button className='action' data-action={props.action} onClick={props.onAction}>
        <span>{props.action}</span>
    </button>

)