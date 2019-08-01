import React from 'react';
import Album from '../Album';


class  AlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }
    render() {
        return(
            <div className="albums">
                {this.props.albums.map((album) => {
                return <Album album={album} />
                })}
            </div> 
        );
    }
}


export default AlbumList;