import React from "react";

import '../App.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${props.fname}&sname=${props.sname}`)
    }
    
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if(!isLoaded) {
            return <div>Loading</div>
        } else {
            return(
                <p>hi</p>)
        }
    }
}

export default List;