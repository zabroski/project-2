import React from 'react';


class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        
        return (
            <div className="div-all-items">
                <div className="banner">
                    <img  alt="img" src={this.props.artist.strArtistBanner} />
                </div>
                <div className="title">
                    <h1 className="artist-name">{this.props.artist.strArtist} - {this.props.artist.strStyle}</h1>
                </div>
                <div className="p-container">
                    <p >{this.props.artist.strBiographyEN}</p>
                </div>
            </div>

        )
    }
}


export default Artist;