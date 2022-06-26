import React, { Component }  from 'react';
import './results.css';

function Results(results) {
    console.log(results);
    console.log("hey");
    return (
        [
        <div className='results'>
            <div className='percent'>
                {results.results.percentage}
            </div>
            <div className='words'>
                {results.results.result}
            </div>
        </div>
        ]

    );
}


export default Results