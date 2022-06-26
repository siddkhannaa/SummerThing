import React, { Component }  from 'react';

function Results(results) {
    console.log(results);
    console.log("hey");
    return (
        [
        <div>{results.results.result}</div>,
        <div> {results.results.percentage}</div>
        ]

    );
}


export default Results