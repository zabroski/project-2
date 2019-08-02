import React from 'react';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    render() {
        return(
            <div className="page-container">
                <div className="home-page">
                    <p className="about-page-p">“One good thing about music-when it hits you ,you feel no pain.”</p>
                </div>
            </div>
        )
    }
}