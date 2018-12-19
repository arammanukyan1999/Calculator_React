import React from 'react';

export default ({numberA,numberB,action}) =>(
    <div className='display'>
        <span >{numberA}</span>
        <span>{action}</span>
        <span>{numberB}</span>
    </div>
)

