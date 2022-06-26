import React, { Component }  from 'react';
import './results.css';
import EmojiRain from './EmojiRain';

function Results(results) {

    console.log(results);
    console.log("hey");
    return (
        [
        <div className='results'>
            <div className='words'>
                {results.results.fname} and {results.results.sname}
            </div>
            <div className='percent'>
                {results.results.percentage}
            </div>
            <div className='words'>
                {results.results.result}
            </div>
            <EmojiRain active={true} drops={100} score={parseInt(results.results.percentage)} />
        </div>
        ]

    );
}


export default Results