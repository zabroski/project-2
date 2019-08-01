import React from 'react';

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }

    render() {
        return(
            <div className='images-parent'>
            <img className="artist-images"  src={this.props.album.strAlbumThumb} alt={this.props.strAlbum} />
            <p className="p-container"> {this.props.strAlbum}</p>
          </div>
        )
    }
}


export default Album;