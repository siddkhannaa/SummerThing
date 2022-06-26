import React  from 'react';
import './results.css';
import EmojiRain from './EmojiRain';

function Results(props) {
    let results = props.results
    let unsubmit = props.unsubmit

    // console.log('meme');
    // console.log(results);
    // console.log(unsubmit);
    return (
        [
        <div className='results'>
            <div className='words'>
                {results.fname} and {results.sname}
            </div>
            <div className='percent'>
                {results.percentage}<p>% match!</p>
            </div>
            <div className='words'>
                {results.result}
            </div>
            <EmojiRain active={true} drops={100} score={parseInt(results.percentage)} />
            <button className="rounded back-button" onClick={unsubmit}>someone else perhaps?</button>
        </div>
        ]

    );
}


export default Results