import React from 'react';


class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: this.getTruncateBio(props.artist.strBiographyEN)
        };
    }

    showFullBio = () => {
        console.log("HERE");
        this.setState(
            {
                bio: this.props.artist.strBiographyEN
            }
        );
    }

    getTruncateBio(sentence){
        var result = sentence;
        var resultArray = result.split(" ");
        if(resultArray.length > 50){
            resultArray = resultArray.slice(0, 50);
            result = resultArray.join(" ") + "…";
        }

        return result;
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
                    <p >
                        {/* This doesn't work  */}
                        {/* {this.state.bio} */}
                        {this.props.artist.strBiographyEN} 
                        <br />
                        <br />
                        <a onClick={this.showFullBio} style={{cursor: "pointer"}}>Click here to show more</a>
                    </p>
                    
                </div>
            </div>

        )
    }
}


export default Artist;